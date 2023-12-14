import {useEffect, useRef, useState} from "react";
import css from './Uploading.module.css';
import sleepyPandaImg from './sleepy_panda_img.png';
import awakePandaImg from './awake_panda_img.png';
import uploadingComplete from './progress_bar_ready_img.png';
import Header from "../../components/header/Header.jsx";

export default function Uploading() {
    const [uploadingProgress, setUploadingProgress] = useState(0);
    const progressWheel = useRef(null);

    let timer;
    const updateCount = () => {
        timer = setInterval(() => {
            progressWheel.current.style.background = `conic-gradient(blue ${(uploadingProgress + 1) * 3.6}deg, white 0deg)`;
            console.log(progressWheel.current);
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

    return (
        <>
            <Header/>
            {uploadingProgress === 100 ?
                <div>
                    <div className={css.content}>
                        <p className={css.progressStatus}></p>
                        <div className={css.contentCenter}>
                            <div className={css.finishBanner}>
                                <img className={css.uploadingCompleteImg} src={uploadingComplete}
                                     alt={'Uploading complete'}/>
                                <p className={css.progressStatus}>Проверка окончена!</p>
                            </div>
                            <button className={css.uploadButton}>ПОСМОТРЕТЬ РЕЗУЛЬТАТ</button>
                            <img className={css.awakePandaImg} src={awakePandaImg}/>
                        </div>
                    </div>
                </div>
                :
                <div className={css.content}>
                    <div className={css.contentCenter}>
                        <div className={css.progressWheel} ref={progressWheel}>
                            <p className={css.progressTitle}>{`${uploadingProgress}%`}</p>
                        </div>
                        <p className={css.progressStatus}>Ожидание...</p>
                        <img className={css.sleepyPandaImg} src={sleepyPandaImg}/>
                    </div>
                </div>
            }
        </>
    );
}