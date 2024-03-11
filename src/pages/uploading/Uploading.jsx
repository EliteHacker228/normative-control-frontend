import {useEffect, useRef, useState} from "react";
import css from './Uploading.module.css';
import sleepyPandaImg from './sleepy_panda_img.png';
import awakePandaImg from './awake_panda_img.png';
import uploadingComplete from './progress_bar_ready_img.png';
import Header from "../../components/header/Header.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";
import StudworkService from "../../services/studwork/StudworkService.js";
import AuthService from "../../services/auth/AuthService.js";

export default function Uploading() {
    const [uploadingProgress, setUploadingProgress] = useState(0);
    const progressWheel = useRef(null);

    const [resultId, setResultId] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const onProgressUpdate = (uploadingPercents) => {
        setUploadingProgress(uploadingPercents);
        progressWheel.current.style.background = `conic-gradient(blue ${(uploadingPercents) * 3.6}deg, white 0deg)`;
    };

    const onProgressAnonymousComplete = (id, fingerprint) => {
        setResultId(id);
        // setResultFingerprint(fingerprint);
    };

    const onProgressAuthedComplete = (id) => {
        setResultId(id);
    };

    useEffect(() => {
        (async () => {
            if (location.state.file)
                if (AuthService.isUserLocallyAuthenticated()) {
                    StudworkService.uploadForAuthedVerification(location.state.file, onProgressUpdate, onProgressAuthedComplete);
                } else {
                    let documentId = await StudworkService.uploadForAnonymousVerification(location.state.file);
                    console.log("Загрузил на проверку документ, у него такой id: " + documentId);
                    let intervalId = setInterval(async () => {
                        console.log("Проверяю статус проверки документа с id: " + documentId);
                        let isWorkReady = await StudworkService.checkIfAnonymousVerificationCompleted(documentId);
                        if (isWorkReady) {
                            console.log("Документ проверен, его id: " + documentId);
                            setResultId(documentId);
                            console.log("Устанавливаю id в state id: " + documentId);
                            onProgressUpdate(100);
                            onProgressAnonymousComplete(documentId);
                            clearInterval(intervalId);
                        }
                    },1000)
                }
            else
                throw new Error('Не смог обнаружить файл для загрузки');
        })();
    }, []);

    const onSeeResultsClick = () => {
        if (AuthService.isUserLocallyAuthenticated())
            navigate(`/result?resultId=${resultId}`);
        else
            navigate(`/result?resultId=${resultId}`);
    };

    return (
        <div>
            <Header/>
            {uploadingProgress === 100 ?
                <div>
                    <div className={css.content}>
                        <p/>
                        <div className={css.uploadingProgress}>
                            <div className={css.uploadingProgress__finishBanner}>
                                <img className={css.uploadingProgress__uploadingCompleteImg} src={uploadingComplete}
                                     alt={'Uploading complete'}/>
                                <p className={css.uploadingProgress__text}>Проверка окончена!</p>
                            </div>
                            <button
                                className={`${css.button} ${css.button_results} ${css.button_red} ${css.button_shadow}`}
                                onClick={onSeeResultsClick}>ПОСМОТРЕТЬ
                                РЕЗУЛЬТАТ
                            </button>
                            <img className={css.uploadingProgress__mascot} src={awakePandaImg}/>
                        </div>
                    </div>
                </div>
                :
                <div className={css.content}>
                    <div className={css.uploadingProgress}>
                        <div className={css.uploadingProgress__wheel} ref={progressWheel}/>
                        <p className={css.uploadingProgress__text}>Ожидание...</p>
                        <img className={css.uploadingProgress__mascot} src={sleepyPandaImg}/>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    );
}