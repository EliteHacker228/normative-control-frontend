import {useEffect, useRef, useState} from "react";
import css from './Uploading.module.css';
import sleepyPandaImg from './sleepy_panda_img.png';
import awakePandaImg from './awake_panda_img.png';
import uploadingComplete from './progress_bar_ready_img.png';
import Header from "../../components/header/Header.jsx";
import {useNavigate} from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

export default function Uploading() {
    const [uploadingProgress, setUploadingProgress] = useState(0);
    const progressWheel = useRef(null);
    const navigate = useNavigate();

    let timer;
    const updateCount = () => {
        timer = setInterval(() => {
            progressWheel.current.style.background = `conic-gradient(blue ${(uploadingProgress + 1) * 3.6}deg, white 0deg)`;
            // console.log(progressWheel.current);
            // progressTitle.current.textContent = `Ожидание${'.'.repeat(uploadingProgress % 3)}`;
            setUploadingProgress(prevCount => prevCount + 1);
        }, 10)

        if (uploadingProgress === 100) {
            clearInterval(timer);
        }
    }
    useEffect(() => {
        updateCount();
        return () => clearInterval(timer);
    }, [uploadingProgress]);

    const onSeeResultsClick = () => {
        navigate('/result');
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
                        <div className={css.uploadingProgress__wheel} ref={progressWheel}>
                            <p className={css.uploadingProgress__indicator}>{`${uploadingProgress}%`}</p>
                        </div>
                        <p className={css.uploadingProgress__text}>Ожидание...</p>
                        <img className={css.uploadingProgress__mascot} src={sleepyPandaImg}/>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    );
}