import Header from "../../../commonComponents/header/Header.jsx";

export default function Error500() {
    return (
        <div>
            <Header/>
            <h1>Ошибка 500</h1>
            <h1>Внутренняя ошибка сервера</h1>
            <p>Сервер не смог обработать задачу</p>
        </div>
    );
}