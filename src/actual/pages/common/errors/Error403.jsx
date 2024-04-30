import Header from "../../../commonComponents/header/Header.jsx";

export default function Error403() {
    return (
        <div>
            <Header/>
            <h1>Ошибка 403</h1>
            <h1>Доступ запрещён</h1>
            <p>Вы пытаетесь получить ресурс, к которому у вас нет доступа</p>
        </div>
    );
}