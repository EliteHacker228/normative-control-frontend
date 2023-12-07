import Header from "../../components/header/Header.jsx";
import panda_with_laptop_img from './panda_with_laptop.png';
import result_copy_ico from './result_copy_ico.svg';
import magnifier_ico from './magnifier_ico.svg';
import wrap_page_ico from './wrap_page_ico.svg';
import unwrap_page_ico from './unwrap_page_ico.svg';
import css from "./Result.module.css";
import {useState} from "react";

export default function Result() {
    const [isWrapped, setIsWrapped] = useState(false);

    const onWrapHandler = () => setIsWrapped(!isWrapped);


    return (
        <>
            <Header/>
            {!isWrapped ?
                <div className={css.contentWrap}>
                    <div className={css.content}>
                        <div className={css.contentLeft}>
                            <div className={css.controlsBlock}>
                                <p className={css.contentLeft__p}>
                                    Чтобы преподаватель смог просмотреть результат, скопируйте и отправьте ему ID
                                    документа:
                                </p>
                                <label className={css.inputBlock} htmlFor={'resultIdInput'}>
                                    <input id={'resultIdInput'} className={css.inputBlock__inputField}
                                           defaultValue={'c5dfb849c20c42088f3269f82b2e477f'}/>
                                    <img className={css.inputBlock__img} src={result_copy_ico}
                                         defaultValue={'c5dfb849c20c42088f3269f82b2e477f'}/>
                                </label>
                            </div>
                            <button className={css.downloadButton}>Скачать результат</button>
                        </div>
                        <div className={css.contentRight}>
                            <img className={css.contentRight__img} src={panda_with_laptop_img}/>
                        </div>
                    </div>
                    <div className={css.content}>
                        <div className={css.contentLeft}>
                            <h1 className={css.content__h1}>Список ошибок</h1>
                            <div className={css.errorsList}>
                                <div className={css.error}>
                                    <p className={css.error__p}>Пустая строка после заголовка отформатирована в режиме
                                        только строчных букв</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Неправильный шрифт</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Неправильный шрифт</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Неправильный шрифт</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Неправильный шрифт</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Неправильный шрифт</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Грамматическая ошибка, которую нашел Word</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Ошибка правописания, которую нашел Word</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Ошибка правописания, которую нашел Word</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__p}>Текст подчеркнут</p>
                                    <img className={css.error__img} src={magnifier_ico}/>
                                </div>
                            </div>
                        </div>
                        <div className={css.contentRight}>
                            <h1 className={css.content__h1}>Просмотр документа</h1>
                            <img src={wrap_page_ico} className={css.wrapIcon} alt={'Wrap page'}
                                 onClick={onWrapHandler}/>
                            <div className={css.documentPreview}>
                                <iframe
                                    className={css.documentPreview__content}
                                    srcDoc={`<!doctype html><html>

<head>
    <style>
        .page {
            width: 595.3px;
            min-height: 841.9px;
            padding-top: 56.7px;
            padding-left: 85.05px;
            padding-bottom: 56.7px;
            padding-right: 42.5px;
        }

        .page-size {
            box-shadow: inset 0px 0px 0px 1px blue;
            box-sizing: border-box;
            position: absolute;
            width: 467.75px;
            height: 728.5px;
            z-index: -10;
        }

        * {
            box-shadow: inset 0px 0px 0px 0.5px red;
            box-sizing: border-box;
            margin: 0.0;
            padding: 0.0;
        }
    </style>
</head>

<body>
<div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='7FF93DAE'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Титульная страница.</span></p>
        <p id='3C9B2290'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='3D65268D' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>РЕФЕРАТ</span></p>
        <p id='3A8B1407'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Реферат, да.</span></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='10A85211' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>СОДЕРЖАНИЕ</span></p>
        <p id='1C62DE7A'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Содержание, да.</span></p>
        <p id='7BC15330'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='68AECB56' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>ВВЕДЕНИЕ</span></p>
        <p id='5FF61135'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Да, введение.</span></p>
        <p id='1103DADA'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='3B154A6B' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>1 </span><span style='font-family:Times New Roman;font-size:14px;'>ВАЖНАЯ ИНФА</span>
        </p>
        <p id='7661CC27'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Важный текст.</span></p>
        <p id='5D9DEAEE' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
        </p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='5D9DEAEE'>
            <span style='font-family:Times New Roman;font-size:14px;'>2</span><span style='font-family:Times New Roman;font-size:14px;'> </span><span style='font-family:Times New Roman;font-size:14px;'>НЕВАЖНАЯ ИНФА</span>
        </p>
        <p id='0E4A8807'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Неважный текст.</span></p>
        <p id='5C5126AB'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='6D0BAFC4' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>ЗАКЛЮЧЕНИЕ</span></p>
        <p id='58CBDF12'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Выводы.</span></p>
        <p id='4B09CC88'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='36F80A0A' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>СПИСОК ЛИТЕРАТУРЫ</span></p>
        <p id='7A1E3439'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Книжки.</span></p>
        <p id='2EC10E36'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='60B25604' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>ПРИЛОЖЕНИЯ</span></p>
        <p id='73D3C590'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Бесполезный текст.</span></p>
    </div>
</div>
</body>

</html>`}/>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={css.contentWrap}>
                    <div className={css.content}>
                        <div className={css.contentCenter}>
                            <h1 className={css.content__h1}>Просмотр документа</h1>
                            <div className={css.wrapContainer}>
                                <img src={unwrap_page_ico} className={css.unwrapIcon} alt={'Wrap page'}
                                     onClick={onWrapHandler}/>
                            </div>
                            <div className={css.documentPreviewCenter}>
                                <iframe
                                    className={css.documentPreviewCenter__content}
                                    srcDoc={`<!doctype html><html>

<head>
    <style>
        .page {
            width: 595.3px;
            min-height: 841.9px;
            padding-top: 56.7px;
            padding-left: 85.05px;
            padding-bottom: 56.7px;
            padding-right: 42.5px;
        }

        .page-size {
            box-shadow: inset 0px 0px 0px 1px blue;
            box-sizing: border-box;
            position: absolute;
            width: 467.75px;
            height: 728.5px;
            z-index: -10;
        }

        * {
            box-shadow: inset 0px 0px 0px 0.5px red;
            box-sizing: border-box;
            margin: 0.0;
            padding: 0.0;
        }
    </style>
</head>

<body>
<div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='7FF93DAE'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Титульная страница.</span></p>
        <p id='3C9B2290'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='3D65268D' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>РЕФЕРАТ</span></p>
        <p id='3A8B1407'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Реферат, да.</span></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='10A85211' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>СОДЕРЖАНИЕ</span></p>
        <p id='1C62DE7A'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Содержание, да.</span></p>
        <p id='7BC15330'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='68AECB56' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>ВВЕДЕНИЕ</span></p>
        <p id='5FF61135'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Да, введение.</span></p>
        <p id='1103DADA'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='3B154A6B' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>1 </span><span style='font-family:Times New Roman;font-size:14px;'>ВАЖНАЯ ИНФА</span>
        </p>
        <p id='7661CC27'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Важный текст.</span></p>
        <p id='5D9DEAEE' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
        </p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='5D9DEAEE'>
            <span style='font-family:Times New Roman;font-size:14px;'>2</span><span style='font-family:Times New Roman;font-size:14px;'> </span><span style='font-family:Times New Roman;font-size:14px;'>НЕВАЖНАЯ ИНФА</span>
        </p>
        <p id='0E4A8807'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Неважный текст.</span></p>
        <p id='5C5126AB'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='6D0BAFC4' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>ЗАКЛЮЧЕНИЕ</span></p>
        <p id='58CBDF12'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Выводы.</span></p>
        <p id='4B09CC88'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='36F80A0A' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>СПИСОК ЛИТЕРАТУРЫ</span></p>
        <p id='7A1E3439'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Книжки.</span></p>
        <p id='2EC10E36'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'></p>
    </div>
    <div class='page'>
        <div class='page-size'></div>
        <p id='60B25604' style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:center;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>ПРИЛОЖЕНИЯ</span></p>
        <p id='73D3C590'
           style='margin-bottom:8.0px;line-height:1.0791666666666666;text-align:justify;hyphens:auto;'>
            <span style='font-family:Times New Roman;font-size:14px;'>Бесполезный текст.</span></p>
    </div>
</div>
</body>

</html>`}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}