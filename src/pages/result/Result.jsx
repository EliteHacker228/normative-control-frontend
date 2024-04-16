import Header from "../../components/header/Header.jsx";
import panda_with_laptop_img from './panda_with_laptop.png';
import result_copy_ico from './result_copy_ico.svg';
import magnifier_ico from './magnifier_ico.svg';
import wrap_page_ico from './wrap_page_ico.svg';
import unwrap_page_ico from './unwrap_page_ico.svg';
import css from "./Result.module.css";
import {useEffect, useRef, useState} from "react";
import Footer from "../../components/footer/Footer.jsx";
import {useSearchParams} from "react-router-dom";
import parse from 'html-react-parser';
import StudworkService from "../../services/studwork/StudworkService.js";
import AuthService from "../../services/auth/AuthService.js";
import ENV from "../../utils/apiUri/ENV.js";

export default function Result() {
    const [isFolded, setIsFolded] = useState(false);
    const resultDownloadRef = useRef();

    const [searchParams, setSearchParams] = useSearchParams();

    const [resultHtml, setResultHtml] = useState('');
    const [detectedMistakes, setDetectedMistakes] = useState([]);

    const resultViewRef = useRef();
    const [duplicateResDom, setDuplicateResDom] = useState();

    const [workStatus, setWorkStatus] = useState('NOT_CHECKED');

    useEffect(() => {
        (async () => {
            let documentNode = await StudworkService.getDocumentById(searchParams.get('resultId'));
            setWorkStatus(documentNode.documentVerdict);
            if (AuthService.isUserLocallyAuthenticated()) {
                StudworkService
                    .getResultOfAuthedVerification(searchParams.get('resultId'))
                    .then((resultHtml) => setResultHtml(resultHtml));
            } else {
                StudworkService
                    .getResultOfAnonymousVerification(searchParams.get('resultId'), AuthService.getFingerprint())
                    .then((resultHtml) => setResultHtml(resultHtml));
            }
        })();
    }, []);

    useEffect(() => {
        if (resultHtml !== "") {
            let newMistakes = [];
            newMistakes = eval(resultHtml.slice(resultHtml.indexOf('<script>') + 8, resultHtml.indexOf('</script>')) + ';mistakes();')
            console.log(resultHtml);
            // console.log(resultHtml.slice(resultHtml.indexOf('<script>') + 9, resultHtml.indexOf('</script>')));

            resultViewRef.current.srcdoc = resultHtml;
            let docDom = new DOMParser().parseFromString(resultHtml, "text/html");
            setDuplicateResDom(docDom);
            if (newMistakes.length !== 0) {
                setDetectedMistakes(newMistakes);
                console.log(newMistakes);
            }
        }
    }, [resultHtml])

    const onResultDownloadClick = () => {
        resultDownloadRef.current.click();
    };

    const onFoldHandler = () => setIsFolded(!isFolded);


    const [textId, setTextId] = useState(searchParams.get('resultId'));
    let copyTimeoutId;
    const onClickCopy = () => {
        navigator.clipboard.writeText(textId);
        setTextId('Скопировано');

        copyTimeoutId = setTimeout(() => {
            setTextId(searchParams.get('resultId'));
        }, 2000);
    };

    const getMistakeCiteHtml = (mistakeId) => {
        let elms = duplicateResDom.querySelectorAll(`[id='${mistakeId}']`);
        if (elms.length === 0) {
            console.log(mistakeId);
            return '';
        }

        if (elms.length === 2) {
            if (elms[0].innerText === '' && elms[1].innerText === '')
                return elms[0].innerHTML;

            if (elms[0].innerText === '')
                return elms[1].innerHTML;

            if (elms[1].innerText === '')
                return elms[0].innerHTML;
        }

        let elm = elms[0];
        while (elm.nodeName === 'SPAN')
            elm = elm.parentNode

        if (elm.innerText === '')
            return '*ОТСТУП*';

        return elm.innerHTML;
    };

    const scrollToElementWithId = (mistakeId) => {
        let elms = resultViewRef.current.contentDocument.querySelectorAll(`[id='${mistakeId}']`);
        if (elms.length === 0) {
            console.log(mistakeId);
            return;
        }

        if (elms.length === 2) {
            if (elms[0].innerText === '' && elms[1].innerText === '')
                return elms[0].scrollIntoView();

            if (elms[0].innerText === '')
                return elms[1].scrollIntoView();

            if (elms[1].innerText === '')
                return elms[0].scrollIntoView();
        }

        let elm = elms[0];
        while (elm.nodeName === 'SPAN')
            elm = elm.parentNode

        return elm.scrollIntoView();
    };

    const downloadingHandler = async () => {
        let file;
        let response;

        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        if (AuthService.isUserLocallyAuthenticated()) {
            file = `${ENV.API_URL}/documents/${searchParams.get('resultId')}?type=docx`;
            response = await fetch(file, requestOptions);
        } else {
            file = `${ENV.API_URL}/documents/${searchParams.get('resultId')}?type=docx`;
            response = await fetch(file);
        }
        console.log(response);
        let responseBlob = await response.blob();
        let objectUrl = window.URL.createObjectURL(responseBlob);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = `conclusion_${new Date().getTime()}.docx`;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    };

    const acceptHandler = () => {
        (async () => {
            await StudworkService.acceptWorkById(searchParams.get('resultId'));
            setWorkStatus("ACCEPTED");
        })();
    };

    const declineHandler = () => {
        (async () => {
            await StudworkService.declineWorkById(searchParams.get('resultId'));
            setWorkStatus("REJECTED");
        })();
    };

    return (
        <div>
            <Header/>
            {isFolded ?
                <div className={css.content}>
                    <h1 className={css.content__header}>Просмотр документа</h1>
                    <div style={{visibility: 'hidden'}}>
                        <img className={css.content__wrapButton} src={unwrap_page_ico} onClick={onFoldHandler}/>
                    </div>
                    <div className={`${css.documentContainer} ${css.documentContainer_wrapped}`}>
                        <iframe className={css.documentContainer__view} srcDoc={resultHtml}/>
                    </div>
                </div>
                :
                <div className={css.content}>
                    <div className={`${css.contentSection} ${css.contentSection_top}`}>
                        <div>

                            {AuthService.getUserRole() === "STUDENT" ?
                                <div>
                                    {
                                        workStatus === "NOT_CHECKED" ?
                                            <div className={`${css.controls} ${css.content__topLeftElement}`}>
                                                <p className={css.controls__description}>Ваша работа проверена
                                                    автоматически! На данный момент она <span className={css.gray}>не проверена</span> нормоконтролером.
                                                    Вы можете просмотреть данный результат повторно в личном кабинете, а
                                                    также скачать его</p>
                                                <button className={css.controls_download}
                                                        onClick={downloadingHandler}>Скачать
                                                    результат
                                                </button>
                                                <a ref={resultDownloadRef}/>
                                            </div>
                                            :
                                            workStatus === "ACCEPTED" ?
                                                <div className={`${css.controls} ${css.content__topLeftElement}`}>
                                                    <p className={css.controls__description}>Ваша работа проверена
                                                        автоматически и вручную. Она была <span
                                                            className={css.red}>отклонена</span> нормоконтролером.
                                                        Вы можете просмотреть данный результат повторно в личном
                                                        кабинете, а также скачать его</p>
                                                    <button className={css.controls_download}
                                                            onClick={downloadingHandler}>Скачать
                                                        результат
                                                    </button>
                                                    <a ref={resultDownloadRef}/>
                                                </div>
                                                :
                                                <div className={`${css.controls} ${css.content__topLeftElement}`}>
                                                    <p className={css.controls__description}>Ваша работа проверена
                                                        автоматически и вручную. Она была <span className={css.green}>принято</span> нормоконтролером.
                                                        Вы можете просмотреть данный результат повторно в личном
                                                        кабинете, а также скачать его</p>
                                                    <button className={css.controls_download}
                                                            onClick={downloadingHandler}>Скачать
                                                        результат
                                                    </button>
                                                    <a ref={resultDownloadRef}/>
                                                </div>
                                    }
                                </div>
                                :
                                <div>
                                    {
                                        workStatus === "NOT_CHECKED" ?
                                            <div className={`${css.controls} ${css.content__topLeftElement}`}>
                                                <p className={css.controls__description}>Данная работа проверена
                                                    автоматически. Вы
                                                    можете принять
                                                    или отклонить её, а также скачать результат проверки.</p>
                                                <button className={css.controls_download}
                                                        onClick={downloadingHandler}>Скачать
                                                    результат
                                                </button>
                                                <a ref={resultDownloadRef}/>
                                                <div className={css.controls__horizontal}>
                                                    <button className={css.controls_accept}
                                                            onClick={acceptHandler}>Принять
                                                    </button>
                                                    <button className={css.controls_decline}
                                                            onClick={declineHandler}>Отклонить
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            workStatus === "ACCEPTED" ?
                                                <div className={`${css.controls} ${css.content__topLeftElement}`}>
                                                    <p className={css.controls__description}>Данная работа <span
                                                        className={css.green}>принята</span>. Вы
                                                        можете скачать результат проверки.</p>
                                                    <button className={css.controls_download}
                                                            onClick={downloadingHandler}>Скачать
                                                        результат
                                                    </button>
                                                    <a ref={resultDownloadRef}/>
                                                </div>
                                                :
                                                <div className={`${css.controls} ${css.content__topLeftElement}`}>
                                                    <p className={css.controls__description}>Данная работа <span
                                                        className={css.red}>отклонена</span>. Вы
                                                        можете скачать результат проверки.</p>
                                                    <button className={css.controls_download}
                                                            onClick={downloadingHandler}>Скачать
                                                        результат
                                                    </button>
                                                    <a ref={resultDownloadRef}/>
                                                </div>
                                    }
                                </div>
                            }

                        </div>
                        <div className={`${css.content__topRightElement}`}>
                            <img src={panda_with_laptop_img} alt={'Panda with laptop'}/>
                        </div>
                    </div>
                    <div className={`${css.contentSection} ${css.contentSection_bottom}`}>
                        <div className={`${css.content__bottomLeftElement}`}>
                            <h1 className={css.content__header}>Список ошибок</h1>
                            <div className={css.errorsList}>
                                {detectedMistakes
                                    .filter((element) => Boolean(duplicateResDom.getElementById(element.id)))
                                    .map((element) => {
                                        return (
                                            <div className={css.error}
                                                 onClick={() => scrollToElementWithId(element.id)}>
                                                <div>
                                                    <p className={css.error__description}><b>{element.mistakeReason}</b>
                                                    </p>
                                                    <p className={css.error__description}>{element.description}</p>
                                                    <div className={css.error__cite}>
                                                        {parse(getMistakeCiteHtml(element.id))}
                                                    </div>
                                                </div>
                                                <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className={`${css.content__bottomRightElement}`}>
                            <h1 className={css.content__header}>Просмотр документа</h1>
                            <div style={{visibility: 'hidden'}}>
                                <img className={css.content__wrapButton} src={wrap_page_ico} onClick={onFoldHandler}/>
                            </div>
                            <div className={css.documentContainer}>
                                <iframe id={'verifyResultView'} className={css.documentContainer__view}
                                        ref={resultViewRef}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    )
        ;
}