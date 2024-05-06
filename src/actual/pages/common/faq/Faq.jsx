import Header from "../../../commonComponents/header/Header.jsx";
import css from "./Faq.module.css";
import Footer from "../../../commonComponents/footer/Footer.jsx";

export default function Faq() {
    const card = (title, description) => {
        return {title: title, description: description}
    }

    let groups = {
        "Проверка работ": [
            card(
                "Основной принцип проверки работ",
                `Алгоритм проверки документов задуман как "ленивый" алгоритм - если соблюдены необходимые условия,
                то осуществляется переход в новое состояние без проверки на то, что это может быть другое состояние,
                но не совсем корректное.<br> Например, если заголовок раздела не подходит под шаблон
                <code>{НОМЕР_РАЗДЕЛА_БЕЗ_ТОЧКИ_НА_КОНЦЕ} НАЗВАНИЕ РАЗДЕЛА БЕЗ ТОЧКИ НА КОНЦЕ</code>, то вариант
                "1.4. Описание работы." <b>не</b> будет распознан как заголовок. Те же правила применимы к форматам
                названий таблиц, рисунков, приложений и т.&nbspп. Но такие заголовки дадут понять что с ними что-то не
                так - они будут проверяться как обычный текст и не будут подходить под правила оформления обычного текста, тем
                самым выдавая несколько ошибок.`
            ),
            card(
                "Превью документа",
                `Превью документа в браузере (он же рендер) не является основным способом просмотра результата
                и изначально задумывался как <b>вспомогательный</b> инструмент для быстрой локализации ошибки и ее
                исправления без необходимости скачивать результат. Мы стремимся как можно сильнее приблизиться к
                такой точности, чтобы рендеринг был практически неотличим от визуализации MS Word, но это очень объемная и не
                самая приоритетная задача.`
            ),
            card(
                "Блоки кода",
                `Алгоритм <b>умеет</b> проверять блоки кода! Для этого всего лишь надо окружить 
                необходимый блок кода невидимыми тегами. Для примера возьмем следующий код:
                <pre><code>tailrec fun fibonacci(num: Int, a: Int = 0, b: Int = 1): Int {\n\treturn if (num == 0) a else fibonacci(num - 1, b, a + b)\n}</code></pre>
                
                Чтобы алгоритм понял, что это блок кода, поставьте <b>перед</b> блоком кода тег <code>/**normative*control*code*start**/</code>
                либо <code>/**c*s**/</code>, а <b>в конце</b> <code>/**normative*control*code*end**/</code> или <code>/**c*e**/</code>. 
                Пример выше будет выглядеть следующим образом:<br><br>

                <pre><code>/**c*s**/tailrec fun fibonacci(num: Int, a: Int = 0, b: Int = 1): Int {\n\treturn if (num == 0) a else fibonacci(num - 1, b, a + b)\n}/**c*e**/<br></code></pre>

                Затем необходимо скрыть эти теги. В MS Word:
                <ol>
                    <li>Для этого выделите тег, нажмите на него правой кнопкой мыши и перейдите в раздел "Шрифт...";</li>
                    <li>В меню "Шрифт" найдите пункт "скрытый" и установите галочку напротив него в состояние Вкл.</li>
                    <li>Готово! Нажмите "ОК".</li>
                </ol>
                
                Теперь при обычном просмотре эти теги не будут видны, но они будут видны алгоритму. Чтобы включить их отображение,
                нажмите <code>Ctrl + *</code> (для MS Word). Разумеется, такой подход несет свои минусы: при включенном режиме отображения
                непечатаемых символов весь текст может "уползти" вниз, так как теги начнут занимать место. Рекомендуем писать работу
                с выключенным отображением непечатаемых символов.<br>
                Если у вас есть идея как можно идентифицировать блоки кода в тексте более простым и эффективным способом, просим
                поделиться ей через форму обратной связи.`
            ),
        ],
        "Работа сервиса": [
            card("Вопрос", "Ответ")
        ]
    }

    return (
        <div>
            <Header/>
            <div className={css.faq}>
                <div className={css.header}>Помощь и поддержка</div>
                <div className={css.container}>
                    <div className={css.left__panel}>
                        <p className={css.leftTitle}>Быстрый переход</p>
                        {
                            Object.entries(groups).map(([name, cards]) => {
                                return <div className={css.group__left} key={name}>
                                    <p className={css.groupName__left}>{name}</p>
                                    {
                                        cards.map(card => {
                                            return <a
                                                className={css.card__left}
                                                key={card.title}
                                                href={`#${card.title}`}
                                            >
                                                {card.title}
                                            </a>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                    <div className={css.right__panel}>
                        {
                            Object.entries(groups).map(([name, cards]) => {
                                return <div key={name} className={css.cardGroup}>
                                    <p className={css.groupTitle}>{name}</p>
                                    {
                                        cards.map(card => {
                                            return <div key={card.title} id={card.title} className={css.faqCard}>
                                                <a className={css.faqCard__title} id={card.title}>{card.title}</a>
                                                <p className={css.faqCard__description} dangerouslySetInnerHTML={{__html: card.description}}></p>
                                            </div>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}