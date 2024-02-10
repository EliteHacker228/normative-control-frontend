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
import StudworkService from "../../services/studwork/StudworkService.js";

export default function Result() {
    const [isFolded, setIsFolded] = useState(false);
    const resultDownloadRef = useRef();

    const [searchParams, setSearchParams] = useSearchParams();

    const [resultHtml, setResultHtml] = useState('');
    const [detectedMistakes, setDetectedMistakes] = useState([]);

    const resultView = useRef();

    useEffect(() => {
        StudworkService
            .getResultOfAnonymousVerification(searchParams.get('resultId'), searchParams.get('fingerprint'))
            .then((resultHtml)=>setResultHtml(resultHtml));
    }, []);

    useEffect(() => {
        let newMistakes = eval(resultHtml.slice(resultHtml.indexOf('['), resultHtml.lastIndexOf(']}];}') + 3));
        if (newMistakes)
            setDetectedMistakes(newMistakes);
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

    return (
        <div>
            <Header/>
            {isFolded ?
                <div className={css.content}>
                    <h1 className={css.content__header}>Просмотр документа</h1>
                    <div>
                        <img className={css.content__wrapButton} src={unwrap_page_ico} onClick={onFoldHandler}/>
                    </div>
                    <div className={`${css.documentContainer} ${css.documentContainer_wrapped}`}>
                        <iframe className={css.documentContainer__view} srcDoc={resultHtml}/>
                    </div>
                </div>
                :
                <div className={css.content}>
                    <div className={`${css.contentSection} ${css.contentSection_top}`}>
                        <div className={`${css.controls} ${css.content__topLeftElement}`}>
                            <p className={css.controls__description}>Чтобы преподаватель смог просмотреть результат,
                                скопируйте и отправьте ему ID
                                документа:</p>
                            <div className={css.textbox}>
                                <input className={css.textbox_input} id={'textbox_input'} type={'text'}
                                       value={textId}/>
                                <img className={css.textbox_copy} src={result_copy_ico} onClick={onClickCopy}/>
                            </div>
                            <button className={css.controls_download} onClick={onResultDownloadClick}>Скачать
                                результат
                            </button>
                            <a download={`result_${new Date().getTime()}.docx`}
                               href={`http://localhost:8080/student/document/conclusion?documentId=${searchParams.get('resultId')}&fingerprint=${searchParams.get('fingerprint')}`}
                               ref={resultDownloadRef}
                               style={
                                   {display: 'none'}
                               }
                            />
                        </div>
                        <div className={`${css.content__topRightElement}`}>
                            <img src={panda_with_laptop_img} alt={'Panda with laptop'}/>
                        </div>
                    </div>
                    <div className={`${css.contentSection} ${css.contentSection_bottom}`}>
                        <div className={`${css.content__bottomLeftElement}`}>
                            <h1 className={css.content__header}>Список ошибок</h1>
                            <div className={css.errorsList}>
                                {detectedMistakes.map((element) => {
                                    return (<div className={css.error}>
                                        <div>
                                            <p className={css.error__description}><b>{element.mistakeReason}</b></p>
                                            <p className={css.error__description}>{element.description}</p>
                                        </div>
                                        <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                    </div>);
                                })}
                            </div>
                        </div>
                        <div className={`${css.content__bottomRightElement}`}>
                            <h1 className={css.content__header}>Просмотр документа</h1>
                            <div>
                                <img className={css.content__wrapButton} src={wrap_page_ico} onClick={onFoldHandler}/>
                            </div>
                            <div className={css.documentContainer}>
                                <iframe id={'verifyResultView'} className={css.documentContainer__view}
                                        ref={resultView}
                                        srcDoc={resultHtml}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    );
}