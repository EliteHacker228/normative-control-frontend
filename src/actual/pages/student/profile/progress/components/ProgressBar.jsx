import css from './ProgressBar.module.css';
import progressBar from '../static/progress_bar.svg';

export default function ProgressBar() {
    return (
        <div className={css.progressBar}>
            <img className={css.progressWheel} src={progressBar} alt={'Колесо загрузки'}/>
            <p className={css.waitingStatus}>Ожидание...</p>
        </div>
    );
}