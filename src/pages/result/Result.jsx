import Header from "../../components/header/Header.jsx";
import panda_with_laptop_img from './panda_with_laptop.png';
import result_copy_ico from './result_copy_ico.svg';
import magnifier_ico from './magnifier_ico.svg';
import wrap_page_ico from './wrap_page_ico.svg';
import unwrap_page_ico from './unwrap_page_ico.svg';
import css from "./Result.module.css";
import {useRef, useState} from "react";
import Footer from "../../components/footer/Footer.jsx";

export default function Result() {
    const [isFolded, setIsFolded] = useState(false);
    const resultDownloadRef = useRef(null);

    const onResultDownloadClick = () => {
        resultDownloadRef.current.click();
    };

    const onFoldHandler = () => setIsFolded(!isFolded);

    const srcDoc =
        `<!doctype html>
<html>

<head>
    <style>
        .page {
            width: 595.3px;
            min-height: 841.9px;
            padding-top: 56.7px;
            padding-left: 85.05px;
            padding-bottom: 56.7px;
            padding-right: 42.55px;
        }

        .page-size {
            box-shadow: inset 0px 0px 0px 1px blue;
            box-sizing: border-box;
            position: absolute;
            width: 467.7px;
            height: 728.5px;
            z-index: -10.0;
        }

        * {
            box-shadow: inset 0px 0px 0px 1px red;
            box-sizing: border-box;
            margin: 0.0;
            padding: 0.0;
        }
    </style>
</head>

<body>
    <div class='page'>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Министерство науки и высшего образования Российской Федерации</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Федеральное государственное автономное образовательное учреждение</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>высшего образования</span></span></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>«Уральский федеральный университет</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>имени первого Президента России </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Б.Н.</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Ельцина»</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>И</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>нститут радиоэлектроники и информационных технологий</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:right;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>К ЗАЩИТЕ ДОПУСТИТЬ</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:right;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Заведующий кафедрой ИИТ</span></span></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:right;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>______________И.Н. Обабков</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:right;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>« 0</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>6</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> » июня 202</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>2</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> г.</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;background-color:#white;'><span>РАЗРАБОТКА СИНХРОНИЗАЦИИ МОДЕЛИ ИЗ </span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;background-color:#white;'><span>REVIT</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;background-color:#white;'><span> С ОНЛАЙН-СЕРВИСОМ </span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;background-color:#white;'><span>ALTECINSOLATIONS</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;background-color:#white;'><span>.</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>ВЫПУСКНАЯ КВАЛИФИКАЦИОННАЯ РАБОТА</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Пояснительная записка</span></span></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Руководитель к.х.н., доцент </span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>_________ </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>И</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>С</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>. </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Стародубцев</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Нормоконтролер</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>: ст. преподаватель </span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>_________ В. Н. Васина</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Обучающийся: группа </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>РИ-480022</span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>_________</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Д. С. Соловьев</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.0;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Екатеринбург – 202</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>2</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;color:#000000;'></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;color:#000000;'><span>РЕФЕРАТ</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.5;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-right:-0.1px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Выпускная квалификационная работа бакалавра </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>44</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> с., </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>6</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> рис., </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>12</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> источника, </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>2</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> прил.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;background-color:#white;'><span>Разработка синхронизации модели из </span></span><span style='font-family:Times New Roman;font-size:14.0px;background-color:#white;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;background-color:#white;'><span> с онлайн-сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;background-color:#white;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;background-color:#white;'><span>.</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Цель работы</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> –</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> реализация моментальной синхронизации модели из </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> с онлайн-сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Объект </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>разработки</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> – </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>онлайн сервис по расчету Инсоляции и KEO</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Результаты работы: </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>р</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>еализован локальный сервер синхронизации модели из </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> с веб-сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. Разработана служба обновления</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>сервера. Подготовленно ядро для отправки данных из плагина </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> и приема их на клиенте в веб-сервисе. Все компоненты упакованы в инсталлятор.</span></span>
        </p>
        <p style='margin-right:-0.1px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Выпускная квалификационная работа выполнена в текстовом редакторе Microsoft Word.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;color:#000000;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;color:#000000;'><span>СОДЕРЖАНИЕ</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'><br></p>
        <p style='margin-bottom:8.0px;line-height:1.0791666666666666;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>ВВЕДЕНИЕ</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Строительство является одной из наиболее важных отраслей отечественной экономики</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, связанных как непосредственно с возведением зданий, так и с различной вспомогательной деятельностью.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Данная выпускная квалификационная работа является частью разработки сервиса </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, разрабатываемого компанией </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Altec</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Systems, нацеленного на отображение информационных моделей зданий, расчет и визуализации норм инсоляции и КЕО.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span> – онлайн сервис по расчету Инсоляции и KEO из BIM-моделей на отечественном ПО.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Инсоляция – достаточность попадания прямого солнечного света внутрь помещений или на участки местности для обеспечения комфортного проживания людей.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Коэффициент естественной освещенности (КЕО) — величина отношения световой энергии, попадающей в расчетную точку внутри помещения в конкретных условиях застройки, к величине световой энергии, которая попадала бы в расчетную точку в условиях, что та находилась бы под открытым небом. [1]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Программный комплекс предназначен для выполнения расчетов продолжительности инсоляции, уровня естественной освещенности, проверки выполнения рассчитанных значений нормативным требованиям и анализа затемняющих расчетную точку объектов.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Выгрузка модели из </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> в облачный сервис происходит с помощью плагина за </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>2–3</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> минуты. После чего по нажатию одной кнопки производятся расчеты и создается отчет.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Программный комплекс ориентирован на проектные компании. Расчет </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>можно выполнять на любой стадии проектирования.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Кто использует решение:</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>п</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>роектные компании</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>г</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>осударственные экспертизы;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>к</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>оммерческие экспертизы.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Актуальность темы выпускной квалификационной работы заключается в том, что в реалиях активной и крупной застройки многие компании нуждаются в средствах автоматизации расчетов строительных норм для увеличения скорости и качества расчетов, сокращения рабочего времени сотрудников, уходящего на рутинные задачи.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Проблема заключается в отсутствие частичного обновления модели в сервисе. Например, пользователю при малейшем изменении своей модели приходилось полностью перезагружать её в сервис, частой практикой является то, что в модели присутствует сразу несколько объектов – зданий, и при изменении одного дома хотелось синхронизировать роботу в </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> и веб-сервисе.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Целью работы является реализация моментальной синхронизации модели из </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> с онлайн-сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>. Для достижения данной цели необходимо выполнить следующие задачи: </span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>р</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>еализовать отправку измененной части модели в плагине для </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>р</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>азработать сервер синхронизации</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> между</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>плагином-экспортером и веб-сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>р</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>еализовать прием данных в веб-сервис</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>реализовать службу обновления сервера синхронизации</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;margin-bottom:8.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>озда</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ть</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> инсталлятор</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Архитектура сервиса </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> представляет из себя сервер построенный по </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>микросервисной</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> архитектуре с файловой системой и двумя базами данных </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>MongoDB</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> и </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>PostgreSQL</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> для хранения информации о настройках, пользователях, информации о моделях и проектах проектировщиков и экспертов и т. д. Веб-сервис для расчета инсоляции и КЕО. И плагин – экспортер для </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> обрабатывающий данные и отправляющий их на сервер (рисунок 1).</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Микросервисная</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> архитектура — это метод построения легковесных приложений. При таком подходе приложение делится на множество независимых и слабосвязанных модулей (сервисов). </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Микросервисы</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> поддерживают независимое развертывание и могут быть созданы на разных языках программирования и с применением разных технологий хранения данных. </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Микросервисы</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> являются альтернативой монолитам. [7]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='margin-bottom:8.0px;line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Рисунок 1 – Архитектура до использования сервера синхронизации</span></span>
        </p>
        <p style='margin-bottom:8.0px;line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>В результате анализа и рассмотрения множества вариантов стало ясно что у пользователя (проектировщика) может быть открыто несколько приложений </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> и несколько сцен нашего сервиса в браузере. Поэтому было принято решение о создании «моста» - сервера между плагином </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> и браузером пользователя.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Первоначально было решено развернуть ещё один </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>web</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> интерфейс, который принимал изменённые данные модели, и отправлял их обратно пользователю на сцену в браузере. Такой подход уже решал проблему, но у него были существенные недостатки. Во-первых, этот интерфейс был бы постоянно нагружен. Во-вторых, данные делали бы лишний «крюк» проходя через сервер и возвращаясь назад к пользователю. В-третьих, данные могли превышать 100 МБ, а это уже много в рамках нашего сервиса. Поэтому было </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>решено поднять локальный сервер. Находясь на одном устройстве, данные передавались между экспортером и сервисом с огромной скоростью и не нагружали бы удалённый сервер.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Возникало сразу несколько вопросов. </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Как этот сервер обновлять?</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Какие права у него будут?</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Сможет ли он контролировать много подключений, как из плагина, так и из веб-сервиса?</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Для обновления локального сервера было принято решение развернуть Windows службу. Так как для установки </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> требуются права администратора, то мы уверены в том, что у нашего пользователя они имеются, а значит и установка нашей службы и сервера будут с правами администратора (рисунок 2).</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Рисунок 2 – Схема взаимодействия сервера синхронизации</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>В итоге получилось два развития пути, когда пользователь первый раз загружает модель и когда её изменят. В первом случае используется старый </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>подход через прогон модели через удалённый сервер для полного сохранения её. Во втором случае измененная часть модели обрабатывается и через локальный сервер загружается прямо в браузер (рисунок 3).</span></span>
        </p>
        <p style='margin-bottom:8.0px;line-height:1.5;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='margin-bottom:8.0px;line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Рисунок 3 – Дорожная карта пользователя</span></span>
        </p>
        <p style='margin-bottom:8.0px;line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Таким образом была использована комбинация этих двух подходов для достижения максимального результата</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>, а также многократного увеличении скорости доставки данных.</span></span>
        </p>
        <p style='margin-left:42.0px;line-height:1.5;text-indent:0.0px;text-align:justify;'></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Задача заключалась в том, что данные необходимо было отправлять в реальном времени в браузер пользователю. </span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Для знакомых с </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>web</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> людей не является секретом, что протокол HTTP предполагает клиент-серверную архитектуру, в которой клиент всегда инициирует передачу данных, а сервер только отвечает на запросы клиентов. В режиме реального времени необходимо, чтобы сервер инициировал отправку данных.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Рассмотрим, какие есть решения этой проблемы.</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>P</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>olling</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>L</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ong </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>P</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>olling</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>S</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>erver </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>S</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ent</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>E</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>vents</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> (SSE);</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>W</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>eb</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>S</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ocket</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Polling</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> - клиент по таймеру опрашивает сервер: «А не появилось ли чего-нибудь новенького?» Это самый старый и прямолинейный способ организации </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>real-time</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. Минусов у этого подхода больше, чем плюсов: нагрузка на сеть и сервер; данные приходят не в реальном времени, а с задержкой между наступлением события и отправкой данных.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Long </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Polling</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> - клиент открывает соединение, а сервер держит его до наступления события, потом отправляет данные, после чего клиент </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>переоткрывает</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> соединение. Это уже настоящий </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>real-time</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> — нагрузка на сеть и сервер снижается. Но остается необходимость самостоятельно организовывать непрерывное соединение, следить за его обрывами и тем, чтобы передаваемые данные не потерялись в этот момент.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Server </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Sent</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Events</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> (SSE) - поддерживаемая браузерами технология непрерывного HTTP-соединения, в котором данные передаются потоком от сервера к клиенту.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>WebSocket</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> - независимый протокол поверх TCP. Это самое современное и популярное решение задачи организации передачи данных между клиентом и сервером в реальном времени. [2]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Исходя из технологий выше было решено выбрать фреймворк SignalR.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ASP.NET Core SignalR — это библиотека с открытым исходным кодом, которая упрощает добавление веб-функций в режиме реального времени в приложения. Веб-функции в режиме реального времени позволяют коду на стороне сервера мгновенно отправлять содержимое на клиенты.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Хорошие кандидаты для SignalR:</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>п</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>риложения, требующие частых обновлений с сервера. Примерами являются игры, социальные сети, платформы для голосования, аукционы, карты и приложения GPS</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>п</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>анели и приложения мониторинга. Примеры включают в себя панели мониторинга компании, мгновенные обновления продаж или оповещения о поездках</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>п</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>риложения для совместной работы. Примерами таких приложений служат демонстрационные приложения и программное обеспечение для конференций</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>п</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>риложения, которым требуются уведомления. Уведомления используют социальные сети, электронная почта, чат, игры, оповещения о поездках и многие другие приложения</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>SignalR предоставляет API для создания </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>сервер-клиент". Вызов RPC вызывает функции на клиентах из кода .NET Core на стороне сервера. Существует несколько </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, каждая из которых имеет пакет SDK для клиента. Из-за этого вызов RPC вызывает различные языки программирования.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Ниже приведены некоторые функции SignalR для ASP.NET Core.</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>у</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>правляет автоматическим управлением соединениями</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>о</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>тправляет сообщения всем подключенным клиентам одновременно. Например, комната чатов</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>о</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>тправляет сообщения конкретным клиентам или группам клиентов</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>м</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>асштабируется для управления увеличением трафика</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>и</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>сточник размещается в SignalR репозитории на </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>GitHub</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>SignalR поддерживает следующие методы обработки обмена данными в режиме реального времени (в порядке правильного резерва):</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>WebSockets</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>обытия, посылаемые сервером;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>д</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>лительный опрос.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>SignalR автоматически выбирает лучший транспортный метод, который находится в пределах возможностей сервера и клиента.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>SignalR использует концентраторы для взаимодействия между клиентами и серверами.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Концентратор — это высокоуровневый конвейер, который позволяет клиенту и серверу вызывать методы друг друга. SignalR автоматически обрабатывает диспетчеризации между компьютерами, позволяя клиентам вызывать методы на сервере и наоборот. Можно передать строго типизированные параметры методам, которые обеспечивают привязку модели. SignalR предоставляет два встроенных протокола концентратора: текстовый протокол на основе JSON и двоичный протокол на основе </span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> HYPERLINK "https://msgpack.org/" \\h </span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>MessagePack</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>MessagePack</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> обычно создает меньшие сообщения по </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>сравнению с JSON. Более старые браузеры должны поддерживать </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> , чтобы обеспечить поддержку протокола </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>MessagePack</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Концентраторы вызывают код на стороне клиента, отправляя сообщения, содержащие имя и параметры клиентского метода. Объекты, отправляемые как параметры метода, </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>десериализованы</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> с помощью настроенного протокола. Клиент пытается сопоставить имя с методом в коде на стороне клиента. Когда клиент находит совпадение, он вызывает метод и передает ему данные </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>десериализованного</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> параметра. [3]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ASP.NET Core является кроссплатформенной, высокопроизводительной средой с открытым исходным кодом для создания современных облачных приложений, подключенных к Интернету.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ASP.NET Core позволяет выполнять следующие задачи:</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>оздавать веб-приложения и службы, приложения Интернета вещей (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>IoT</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>) и серверные части для мобильных приложений</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>и</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>спользовать избранные средства разработки в Windows, </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>macOS</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> и Linux</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>в</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ыполнять развертывания в облаке или локальной среде</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>;</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>з</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>апускать в .NET Core. [4]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Таким образом</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> было решено реализовать с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ервер синхронизации</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> на языке программирования </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>C</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span># </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>в среде разработки </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ASP</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>NET</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Core</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>с использованием фреймворка </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>SignalR</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Что в итоге привело к снижению времени разработки, а также избавило от большого количества потенциальных багов и ошибок приложения.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;background-color:#FFFFFF;'><br></p>
        <p style='margin-left:57.0px;line-height:1.5;text-indent:0.0px;text-align:justify;background-color:#FFFFFF;'><br>
        </p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Служба Windows — приложение, автоматически (если настроено) исполняемое системой при запуске операционной системы Windows и выполняющиеся вне зависимости от статуса пользователя. Имеет общие черты с концепцией демонов в Unix. [5]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Для взаимодействия со службой из экспортера, был выбран протокол TCP. С его помощью служба принимает команды и в зависимости от них управляет сервером.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Transmission</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Control Protocol (TCP, протокол управления передачей) — один из основных </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> интернета. Предназначен для управления </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. Пакеты в TCP называются сегментами.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>В </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> выполняет функции </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Механизм TCP предоставляет </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> с предварительной установкой соединения, осуществляет повторный запрос данных в случае потери данных и устраняет дублирование при получении двух копий одного пакета, гарантируя тем самым (в отличие от </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>) целостность передаваемых данных и уведомление отправителя о результатах передачи.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Реализации TCP обычно встроены в </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. Существуют реализации TCP, работающие в </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Когда осуществляется передача от компьютера к компьютеру через Интернет, TCP работает на верхнем уровне между двумя конечными системами, например, </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> и веб-сервером. TCP осуществляет </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>надёжную передачу потока байтов от одного процесса к другому. [6]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>В итоге служба</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> обновления сервера синхронизации</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>благодаря </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>TCP</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>«слушателю»</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>,</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> имеет потенциал к расширению, а также многофункциональному управлению</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> из любого </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>десктопного</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> приложения</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Что дает огромные возможности в будущем, и гибкое управление сервером в настоящем.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>В качестве языка для разработки веб-интерфейса </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> был выбран </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Typescript</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. В отличии от </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Javascript</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> он обладает возможностью статической типизации, что позволяет отлавливать часть ошибок на этапе компиляции типов. Также в функционал языка входят модификаторы доступа, интерфейсы, дженерики, абстрактные классы и другие структуры, отсутствующие в </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Javascript</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, нацеленные на улучшение инкапсуляции, структурирование кода и упрощение рефакторинга и расширения функционала.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>React</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span> — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиот</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>ек JavaScript, предоставляющих полноценную платформу приложений, </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>React</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span> ориентируется исключительно на создание представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и генерируют элементы пользовательского интерфейса. Вы можете разместить отдельный компонент на веб-странице или вложить иерархии компонентов для создания сложного пользовательского интерфейса. [12]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>SignalR</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>использован в качестве создателя соединения между сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>и сервером синхронизации.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Autodesk </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, или просто </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> — программный комплекс, реализующий принцип информационного моделирования зданий (Building Information </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Modeling</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>, BIM). Предназначен для архитекторов, проектировщиков несущих конструкций и инженерных систем. Предоставляет возможности трехмерного моделирования элементов здания и плоского черчения элементов оформления, создания пользовательских объектов, организации совместной работы над проектом, начиная от концепции и заканчивая выпуском рабочих чертежей и спецификаций.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>База данных </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> может содержать информацию о проекте на различных этапах жизненного цикла здания, от разработки концепции до строительства и снятия с эксплуатации.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Что такое API? API – это сокращение от Application </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Programming</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Interface (интерфейс программирования приложений). API является средством взаимодействия программиста с программным продуктом. </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> API, например, предоставляет программистам доступ к функциональным возможностям </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> и позволяет писать инструкции, которые </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> будет выполнять по порядку. Взглянем на процесс немного с другой стороны. Коммерческие компании-разработчики программного обеспечения, такие как Autodesk, часто предоставляют наборы библиотек, которые можно применять в пользовательских приложениях для взаимодействия с программными продуктами (Autodesk </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> и др.), расширяя таким образом их функциональность. Такие наборы библиотек называются API программных </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>продуктов. Техника написания приложений, создаваемых для расширения функциональности программного продукта, зависит от структуры API и от перечня функций, доступ к которым он предоставляет. Что такое плагины? </span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Плагины – это программные модули или файлы, которые добавляют дополнительные функциональные возможности в целевой продукт (обычно в виде команд, автоматизирующих некоторые действия). Когда мы говорим о плагинах для </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> (для них применяются также термины «надстройка», «дополнение» и «подключаемый модуль»), мы имеем в виду модули, содержащие код, который взаимодействует с </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> API. </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> загружает плагины и использует их в определенных ситуациях – например, когда пользователь вызывает ту или иную команду. [9]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Плагины для </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> в основном</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>разрабатываются на языке программирования </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>C</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>#</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> на платформе </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>NET</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Framework</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Так как это самый мощный и гибкий способ, позволяющий выходить за рамки родительского приложения (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Autodesk</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>).</span></span>
        </p>
        <p style='line-height:1.5;text-indent:28.35px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='margin-left:21.3px;line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>ция системы</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span>
        </p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Сервер синхронизации состоит из трех компонентов:</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>к</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>онтроллера для получения сведений о соединении и отправки данных (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ConnectorController</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>к</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>онцентратора соединений (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ервиса хранения соединений (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ConnectorStorageService</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>).</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Когда открывается сцена с моделью в сервисе </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>, с помощью SignalR улетает запрос на соединение в концентратор сервера. Все нужные данные об этом соединении сохраняются в сервис хранения соединений.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Контроллер содержит два </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>get</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> запроса на получение всех соединений и какого-то одного конкретного соединения по имени проекта и один </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>post</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> запрос для отправки данных на открытую сцену веб-сервиса</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>(рисунок 4)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Когда приходит </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>post</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> запрос с данными и именем проекта, метод получает из сервиса соединений нужное, путём простого перебора всех элементов словаря, далее отправляет потоковой передачей данные прямиком в браузер. (Приложение А)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Рисунок 4 – Диаграмма событий сервера синхронизации</span></span>
        </p>
        <p style='margin-left:46.35px;line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='margin-left:46.35px;line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Служба обновления состоит из трех компонентов:</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ервиса загрузки, выгрузки сборки с сервером (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AssemblyService</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>ервера TCP – «слушателя» TCP – клиентов (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>TcpServer</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>с</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>амой службы (</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Worker</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Было принято решение что служба будет сама запускать сервер </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>подгружая его сборку себе в домен, таким образом мы избавляемся от лишних действий с правами на запуск и уменьшаем количество запущенных процессов. Так как сервис обновления плагина находится в самом себе, и уже был готов, на момент реализации сервера синхронизации, то было принято использовать его для замены </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>dll</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> файла (сборки). Так как </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> обладает ограниченными правами, а также его экземпляров может быть запущенно несколько, то запуск сервера полностью предоставлялся службе.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>При запуске компьютера пользователя автоматически запускается служба, следующим шагом она подгружает и запускает сервер. Когда появляется новое обновление сервера, с экспортера приходит TCP сообщение о том, что требуется удалить из домена сборку, чтобы получить доступ на её изменение. После обновления сервера синхронизации он обратно подгружается в домен и запускается</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>(рисунок 5)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Запуск осуществляется с помощью рефлексии, а именно находится тип «Program», далее находится метод «</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>StartServer</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>», создаётся экземпляр класса этого типа и вызывается вышеупомянутый метод.   (Приложение Б)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Рисунок 5 – Диаграмма событий службы обновления сервера</span></span>
        </p>
        <p style='line-height:1.5;text-indent:28.35px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>В веб-сервисе был реализован функционал подключения к серверу при открытии сцены, а также прием данных. </span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Схема работы довольно проста. Сначала происходит соединение с </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>сервером, за счет концентратора SignalR, по нему отправляется информация о открытом проекте, которая в последующем потребуется для того, чтобы отправить данные в нужную вкладку или браузер. Далее это соединение остаётся открытым до тех пор, пока не придет измененная часть модели. В последующем и нужно будет обработать и загрузить в 3D движок Babylon.js.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>В плагине – экспортере был разработан и внедрён сервис, отправляющий данные на сервер синхронизации, а также команды в службу обновления сервера, такие как загрузка, выгрузка сборки, и запуск, остановка сервера.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Запрос с данными отправляется по HTTP протоколу.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>HTTP (</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>HyperText</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Transfer Protocol — протокол передачи гипертекста) — </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>символьно</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>-ориентированный клиент-серверный протокол прикладного уровня без сохранения состояния, используемый сервисом World Wide Web.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Основным объектом манипуляции в HTTP является ресурс, на который указывает URI (</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Uniform</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Resource </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Identifier</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> – уникальный идентификатор ресурса) в запросе клиента. Основными ресурсами являются хранящиеся на сервере файлы, но ими могут быть и другие логические (напр. каталог на сервере) или абстрактные объекты (напр. ISBN). Протокол HTTP позволяет указать способ представления (кодирования) одного и того же ресурса по различным параметрам: </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>mime</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>-типу, языку и т. д. Благодаря этой возможности клиент и веб-сервер могут обмениваться двоичными данными, хотя данный протокол является текстовым. [11]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Для того чтобы измененная модель была доставлена по нужному адресу требуется всего лишь знать имя проекта, которое экспортер изначально получает с удаленного сервера </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>На рисунке </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>6</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> можно видеть полную схему взаимодействия компонентов синхронизации.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Рисунок </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>6</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> – Полная схема взаимодействия с сервером синхронизации</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:28.35px;line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>После завершения разработки всех компонентов синхронизации, требовалось их упаковать в инсталлятор</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> под операционную систему </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Windows</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>. Выбор упал на Advanced </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Installer</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Advanced </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Installer</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> — это мощное и простое в использовании средство для создания программ установок в формате MSI / EXE / CAB за считанные минуты. Решение Advanced </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Installer</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> основывается на использовании стандартных открытых форматов. Файлы проектов сохраняются в формате XML, что упрощает их интеграцию с системами управления исходными текстами. Advanced </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Installer</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> - профессиональный инструмент для создания MSI-установщиков приложений под операционные системы Windows. [8]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Существует такая практика, что у проектировщика на компьютере установлено несколько версий </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>. Чтобы установить плагин требуется положить файл с расширением </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>addin</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> в папку с соответствующей версией «</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>C:\\Users\\[</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>User]\\AppData\\Roaming\\Autodesk\\Revit\\Addins\\[Version]».</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Появилась задача при установке предоставить пользователю выбор в какие версии </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> установить экспортер. Для этого был написан скрипт на языке VBS, который обнаруживал установленные версии </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>VBScript</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> (VBS, развернуто Microsoft Visual Basic </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Script</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Edition, иногда Visual Basic </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Script</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>) — язык сценариев, созданный компанией Microsoft на основе языка Visual Basic, предназначенный для применения в приложениях, использующих технологию Active </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Scripting</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>. [10]</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:left;'><br></p>
        <p style='margin-bottom:8.0px;line-height:1.0791666666666666;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='margin-bottom:8.0px;line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>В процессе работы цель была достигнута. Реализован локальный сервер синхронизации модели из </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> с веб-сервисом </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>AltecInsolations</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>. Разработана служба обновления</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>сервера, способная полностью управлять им, а именно подгружать его в домен, запускать, останавливать и удалять. Подготовленно ядро для отправки данных из плагина </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> и приема их на клиенте в веб-сервисе. Все компоненты упакованы в инсталлятор.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>В результате было получено многократное ускорение при отправке модели </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> после её изменения. И заложен фундамент под формирование новых улучшение за счёт поднятого изменяемого локального сервера.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>ОБОЗНАЧЕНИЯ И СОКРАЩЕНИЯ</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>онлайн сервис по расчету Инсоляции и KEO</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>КЕО</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> –</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>к</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>оэффициент естественной освещенности</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>BIM</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> – </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>сокращение от</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Building Information Model или </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Modeling</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> – </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>информационная модель (или моделирование) </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> и сооружений</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>ПО</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>– программное обеспечение.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Revit</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>программный комплекс для автоматизированного проектирования.</span></span>
        </p>
        <p style='margin-left:35.45px;line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>MongoDB </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> это </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>документоориентированная</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> база данных типа </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>NoSQL</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>PostgreSQL</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> – </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>свободная</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>объектно-реляционная</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>система управления базами данных</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>(СУБД).</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>HTTP</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>(</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>HyperText</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Transfer Protocol </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>«протокол передачи </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>») — </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> передачи данных</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>TCP</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>сокращение от </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Transmission</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Control Protocol (протокол управления передачей)</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>,</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> один из основных </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> интернета</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>ASP</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>NET </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>(</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Active</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Server</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Pages</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> для .</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>NET</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> платформа разработки</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>SignalR</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>это библиотека для </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>ASP</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>NET</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> разработчиков, которая упрощает процесс добавления веб-функций в режиме реального времени к приложениям</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Концентратор </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> это высокоуровневый конвейер, который позволяет клиенту и серверу вызывать методы друг друга.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>URI</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> – </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>сокращение от </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Uniform</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Resource </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Identifier</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>(</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>уникальный идентификатор ресурса)</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>API – сокращение от Application </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Programming</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Interface (интерфейс </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>программирования приложений)</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>React</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>–</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>JSON</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>–</span></span><span style='font-family:Arial;font-size:10.5px;color:#202122;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>текстовый формат обмена данными, основанный на JavaScript</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#171717;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>VBScript</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> (VBS, развернуто Microsoft Visual Basic </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Script</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> Edition, иногда Visual Basic </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Script</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>) — язык сценариев, созданный компанией Microsoft на основе языка Visual Basic</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Babylon.js</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>–</span></span><span style='font-family:Arial;font-size:14.0px;color:#333333;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>простой в использовании движок трехмерной (3D) графики на базе </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>WebGL</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Advanced </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Installer</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> — это мощное и простое в использовании средство для создания программ установок</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>.</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:center;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>БИБЛИОГРАФИЧЕСКИЙ СПИСОК</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Расчет инсоляции и КЕО (коэффициента естественной освещенности) [Электронный ресурс] // </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>iD</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> группа https://idgruppa.ru/services/insolyacia-keo/ (Дата обращения – 21.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Вам посылка, или как мы доставляем сообщения с сервера на клиент в реальном времени [Электронный ресурс] // </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Хабр</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> https://habr.com/ru/company/superjob/blog/649053/ (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Общие сведения об ASP.NET Core SignalR [Электронный ресурс] // Microsoft </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Docs</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> https://docs.microsoft.com/ru-ru/aspnet/core/signalr/introduction?view=aspnetcore-6.0 (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Общие сведения об ASP.NET Core [Электронный ресурс] // Microsoft </span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span>Docs</span></span><span style='font-family:Times New Roman;font-size:14.0px;'><span> https://docs.microsoft.com/ru-ru/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0 (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Служба Windows [Электронный ресурс] // Википедия https://ru.wikipedia.org/w/index.phptitle=Служба_Windows&stable=1 (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Transmissio</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>n</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Control Protocol [Электронный ресурс] // Википедия https://ru.wikipedia.org/wiki/Transmission_Control_Protocol (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Микросервисная</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> архитектура от А до Я [Электронный ресурс] // </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>BellSoft</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> https://libericajdk.ru/announcements/2021/12/02/microservices-101/ (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Advanced </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Installer</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> [Электронный ресурс] // 4PDA </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>https://4pda.to/forum/index.php?showtopic=184907&st=20 (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Урок 1: Общее представление о программе [Электронный ресурс] // Autodesk https://damassets.autodesk.net/content/dam/autodesk/images/ru-adn/lesson_1.pdf (Дата обращения – 20.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>VBScript</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> [Электронный ресурс] // Википедия https://ru.wikipedia.org/wiki/VBScript (Дата обращения – 21.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> Протокол HTTP — Документация по Веб-программированию 0.0.0 [Электронный ресурс] // Информационные системы и технологии </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>УрФУ</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> ИРИТ-РТФ https://iit-web-lectures.readthedocs.io/ru/latest/www/http.html (Дата обращения – 21.05.2022)</span></span>
        </p>
        <p style='margin-left:0.0px;line-height:1.5;text-indent:35.4px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>React</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> в Windows [Электронный ресурс] // Microsoft </span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span>Docs</span></span><span style='font-family:Times New Roman;font-size:14.0px;color:#000000;'><span> https://docs.microsoft.com/ru-ru/windows/dev-environment/javascript/react-overview (Дата обращения – 21.05.2022)</span></span>
        </p>
        <p style='margin-left:35.4px;line-height:1.5;text-indent:0.0px;text-align:justify;'><br></p>
        <p style='margin-bottom:8.0px;line-height:1.0791666666666666;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:right;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>ПРИЛОЖЕНИЕ</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>А</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>ConnectorController.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Models</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Microsoft.AspNetCore.Mvc</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Microsoft.AspNetCore.SignalR</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Controllers</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>/// <summary></span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>//</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>/  Контроллер</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> для получения сведений о соединении и отправки данных.</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>/// </summary></span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>[Route("</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>api</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>/[controller]</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>")]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>[</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ApiController</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ConnectorController</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ControllerBase</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IHubContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>hubContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorController</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ConnectorController</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorController</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> logger,</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                               </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>,</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                               </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IHubContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>hubContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _logger = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>hubContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>hubContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>HttpGet</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>("</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GetConnections</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>")]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status200OK)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status400BadRequest)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status404NotFound)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task<</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IActionResult</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Get(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> connections = _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage.GetConnections</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connections successfully received"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Ok</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(connections</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>HttpGet</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>("{</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}")]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status200OK)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status400BadRequest)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status404NotFound)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task<</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IActionResult</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Get(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.IsNullOrEmpty</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>))</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Invalid project name"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Invalid project name"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> connection = _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage.GetConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connections successfully received"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Ok</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(connection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>HttpGet</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>("connect")]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status200OK)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status400BadRequest)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status404NotFound)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task<</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IActionResult</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Connect(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Connection connection)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(!_</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage.IsConnectionExist</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection.ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>))</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Project {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} not found"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection.ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>NotFound</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(connection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Project {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} exist"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection.ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>hubContext.Clients.Client</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(connection.ConnectionId).SendAsync(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connect"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Ok</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>HttpPost</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>RequestSizeLimit</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>180L * 1024L * 1024L)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status200OK)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status400BadRequest)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProducesResponseType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StatusCodes.Status404NotFound)]</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task<</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IActionResult</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> Post([</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>FromForm</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>] </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, [</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>FromForm</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>] </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IFormFile</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> file)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.IsNullOrEmpty</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>))</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Invalid project name"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Invalid project name"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> connection = _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage.GetConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (connection </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>is</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>null</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection was null"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection was null"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>file.Length</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> == </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>0</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogWarning</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"File length was null"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Incorrect file size"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> data = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>MemoryStream</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Start copying data"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>file.CopyToAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(data);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Copied successfully, start transfer"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>hubContext.Clients.Client</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(connection.ConnectionId).SendAsync(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Data"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>data.ToArray</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>());</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"File transferred successfully"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Ok</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>BadRequest</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>ConnectorStorageService.cs</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Models</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Services</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Dictionary<</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, Connection> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connections;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> logger)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _connections = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Dictionary<</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, Connection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _logger = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>DeleteConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (_</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connections.Remove</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>))</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} deleted successfully"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} not found"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>throw</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IEnumerable</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><Connection> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GetConnections</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connections.Values</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>throw</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Connection? </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GetConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> connection = _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connections.Values.FirstOrDefault</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(x => </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>x.ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> == </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (connection </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>is</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> not </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>null</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection with project name {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} is successfully received."</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>throw</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>bool</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>IsConnectionExist</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connections.ContainsKey</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>AddConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Connection connection)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection.ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(!_</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connections.ContainsKey</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>))</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _connections[</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>] = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection with project name {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} successfully added"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>,</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                                       </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection.ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connection with project name {</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>} already exists"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>,</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                                   </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connection.ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(ex, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>throw</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>ConnectorHub.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Models</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Microsoft.AspNetCore.SignalR</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>LiveSync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Hub</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> logger, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _logger = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Add</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Connection connection)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage.AddConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(connection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>override</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>OnConnectedAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Connected Id: {Id}"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Context.ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>base</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.OnConnectedAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>override</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>OnDisconnectedAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Exception exception)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionStorage.DeleteConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Context.ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>base</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.OnDisconnectedAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(exception);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Program.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Controllers</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Services</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Microsoft.AspNetCore.Http.Features</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>LiveSync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Program</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>StartServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>stoppingToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> assembly = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>typeof</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorController</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>).Assembly;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> builder = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>WebApplication.CreateBuilder</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.AddControllers</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>().AddApplicationPart(assembly).AddControllersAsServices();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.AddEndpointsApiExplorer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.AddSwaggerGen</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.AddSingleton</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectionStorageService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.AddSignalR</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.Configure</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>FormOptions</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>formOptions</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> =></span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>formOptions.ValueLengthLimit</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>int</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.MaxValue</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>formOptions.MultipartBodyLengthLimit</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>int</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.MaxValue</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        });</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Services.AddCors</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(config =></span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>config.AddPolicy</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>DefaultPolicy</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>,</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                             </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>policyBuilder</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> => </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>policyBuilder.WithOrigins</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"https://localhost:3000"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                                 </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AllowAnyMethod</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>()</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                                 </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AllowAnyHeader</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>()</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                                 </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AllowCredentials</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>());</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        });</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> app = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>builder.Build</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>if</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.Environment.IsDevelopment</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>())</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseSwagger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseSwaggerUI</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseHttpsRedirection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseRouting</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseCors</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>DefaultPolicy</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseAuthentication</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseAuthorization</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.MapControllers</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.UseEndpoints</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(endpoints =></span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>endpoints.MapHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectorHub</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"/hub"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        });</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>app.RunAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>stoppingToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Connection.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Models</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Connection</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ProjectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{ </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>get</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>; </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>set</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>; }</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConnectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{ </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>get</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>; </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>set</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>; }</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>IConnectionsStorageService.cs</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Models</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.LiveSync.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>interface</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IConnectionStorageService</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>bool</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>IsConnectionExist</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>AddConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Connection connection);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IEnumerable</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><Connection> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GetConnections</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    Connection? </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GetConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>projectName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>DeleteConnection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>connectionId</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='margin-bottom:8.0px;line-height:1.0791666666666666;text-indent:0.0px;text-align:left;'><br></p>
        <p style='margin-bottom:8.0px;line-height:1.0791666666666666;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.5;text-indent:0.0px;text-align:right;'>
            <span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>ПРИЛОЖЕНИЕ</span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span> </span></span><span style='font-family:Times New Roman;font-size:14.0px;font-weight:bold;'><span>Б</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>TcpServer.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>System</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>.Net</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>System.Net.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>Sockets</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>System.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>Text</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>Exporter.Service.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>Exporter.Service.Services</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>TcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>ITcpServer</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>{</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>const</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>int</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> Port = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>8888</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>IAssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>TcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>> _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>TcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>TcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>> logger, </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>IAssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>)</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        _logger = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>Start</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>)</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>TcpListener</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>? server = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>null</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>try</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>localAddress</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>IPAddress.Parse</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>"127.0.0.1"</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            server = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>TcpListener</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>localAddress</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>, Port);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>server.Start</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>while</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> (</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>true</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>)</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>Ожидание</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>подключений</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>... "</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> client = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>server.AcceptTcpClient</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>Подключен</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>клиент</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>. </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>Выполнение запроса..."</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> data = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>byte</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>[</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>256</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>];</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> response = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>StringBuilder(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> stream = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>client.GetStream</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>do</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> bytes = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>stream.Read</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(data, </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>0</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>data.Length</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>response.Append</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(Encoding.UTF8.GetString(data, </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>0</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>, bytes));</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                } </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>while</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> (</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>stream.DataAvailable</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> command = </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>response.ToString</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>try</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>"Response (command) = {Command}"</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>, command);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>switch</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> (command)</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>case</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>nameof</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>_</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService.LoadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>):</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                            _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService.LoadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>break</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>case</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>nameof</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>_</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService.UnloadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>):</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                            _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>assemblyService.UnloadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>break</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>default</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>:</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                            _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>"Command:{Command} not found"</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>, command);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>break</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>;</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                    _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>stream.Close</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>client.Close</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>);</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;'><span>finally</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        {</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;'><span>server?.</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>Stop</span></span><span style='font-family:Courier New;font-size:10.0px;'><span>();</span></span>
        </p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>        }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>    }</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Courier New;font-size:10.0px;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>AssemblyService.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.Service.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.Service.Services</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>AssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IAssemblyService</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>const</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>string</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyFilePath</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Server/Exporter.LiveSync.dll</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CancellationTokenSource</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancelTokenSource</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CustomAssemblyLoadContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _context = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>AssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>> logger)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _logger = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>LoadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _context = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CustomAssemblyLoadContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> assembly = _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>context.LoadFromStream</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>MemoryStream</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>File.ReadAllBytes</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyFilePath</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)));</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Console.WriteLine</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assembly.FullName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> type = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assembly.GetType</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Exporter.LiveSync.Program</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>greetMethod</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>type.GetMethod</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StartServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> instance = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Activator.CreateInstance</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(type</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Thread</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>() =></span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>greetMethod</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>?.</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Invoke(instance, </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>object?</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>[] { _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancelTokenSource.Token</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> });</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>StartServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Invoked"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>                _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>).Start</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Thread started"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>void</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>UnloadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>try</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancelTokenSource.Cancel</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancelTokenSource</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CancellationTokenSource</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Token cleaned"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GC.Collect</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>GC.WaitForPendingFinalizers</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>context.Unload</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>catch</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> (Exception ex)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogError</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ex.Message</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Worker.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.Service.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Service</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Worker</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>BackgroundService</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IAssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><Worker> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>private</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>readonly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ITcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>tcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Worker</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ILogger</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><Worker> logger, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IAssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ITcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>tcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _logger = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>tcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>tcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>override</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>StartAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyService.LoadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>base</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.StartAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>protected</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>override</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>async</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>ExecuteAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>stoppingToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>new</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Thread</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>() => _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>tcpServer.Start</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>()).Start();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>while</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(!</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>stoppingToken.IsCancellationRequested</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>logger.LogInformation</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>"Worker running at: {time}"</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>DateTimeOffset.Now</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>            </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Task.Delay</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>1000</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> * </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>60</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>stoppingToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>override</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Task </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>StopAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>CancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        _</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyService.UnloadAssembly</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>base</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.StopAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>cancellationToken</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>);</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='margin-bottom:8.0px;line-height:1.0791666666666666;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>Program.cs</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Service</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.Service.Interfaces</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.Service.Services</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>var</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> host = </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Host.CreateDefaultBuilder</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>args</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>UseWindowsService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>()</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ConfigureServices</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(services =></span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>services.AddHostedService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><Worker>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>services.AddSingleton</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>IAssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyService</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>services.AddSingleton</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span><</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>ITcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>, </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>TcpServer</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    })</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>.Build</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>await</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>host.RunAsync</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>();</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'>
            <span style='font-family:Times New Roman;font-size:14.0px;'><span>CustomAssemblyLoadContext.cs</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>System.</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Reflection</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>using</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>System.Runtime.Loader</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>namespace</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>Exporter.Service.Services</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>class</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>CustomAssemblyLoadContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> :</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyLoadContext</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>{</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>public</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>CustomAssemblyLoadContext</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>) : </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>base</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>(</span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>true</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    }</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'><br></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>protected</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>override</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> Assembly? </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>Load(</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>AssemblyName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>assemblyName</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>)</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    {</span></span></p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>        </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>return</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span> </span></span><span style='font-family:Courier New;font-size:10.0px;font-weight:bold;color:#000000;'><span>null</span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>;</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>    </span></span><span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span>
        </p>
        <p style='line-height:1.0;text-indent:0.0px;text-align:left;'>
            <span style='font-family:Courier New;font-size:10.0px;color:#000000;'><span>}</span></span></p>
        <p style='line-height:1.5;text-indent:35.45px;text-align:justify;'><br></p>
    </div>
    <script>function ms() { return ['apple', 'orange', 'banana']; }</script>
    <script>var msi = ['apple', 'orange', 'banana'];</script>
</body>
</html>`;

    const [textId, setTextId] = useState('c5dfb849c20c42088f3269f82b2e');
    let copyTimeoutId;
    const onClickCopy = () => {
        navigator.clipboard.writeText('c5dfb849c20c42088f3269f82b2e');
        setTextId('Скопировано');

        copyTimeoutId = setTimeout(() => {
            setTextId('c5dfb849c20c42088f3269f82b2e');
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
                        <iframe className={css.documentContainer__view} srcDoc={srcDoc}/>
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
                            <a href={'public/dummy_result.docx'} ref={resultDownloadRef}
                               download={`result_${new Date().getTime()}.docx`}
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
                                <div className={css.error}>
                                    <p className={css.error__description}>Пустая строка после заголовка отформатирована
                                        в
                                        режиме только строчных букв</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Неправильный шрифт</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Неправильный шрифт</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Неправильный шрифт</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Неправильный шрифт</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Грамматическая ошибка, которую нашел Word</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Ошибка правописания, которую нашел Word</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Ошибка правописания, которую нашел Word</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Текст подчеркнут</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                                <div className={css.error}>
                                    <p className={css.error__description}>Текст подчеркнут</p>
                                    <img src={magnifier_ico} alt={'Magnifier glass ico'}/>
                                </div>
                            </div>
                        </div>
                        <div className={`${css.content__bottomRightElement}`}>
                            <h1 className={css.content__header}>Просмотр документа</h1>
                            <div>
                                <img className={css.content__wrapButton} src={wrap_page_ico} onClick={onFoldHandler}/>
                            </div>
                            <div className={css.documentContainer}>
                                <iframe id={'target_frame'} className={css.documentContainer__view} srcDoc={srcDoc}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    );
}