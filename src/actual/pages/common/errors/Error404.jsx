import Header from "../../../commonComponents/header/Header.jsx";

export default function Error404() {
    return (
        <div>
            <Header/>
            <h1>Ошибка 404</h1>
            <h1>Не найдено</h1>
            <p>Ресурс, к которому вы пытаетесь получить доступ, не найден</p>
        </div>
    );
}