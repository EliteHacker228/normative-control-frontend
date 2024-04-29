import AuthService from "../../../services/AuthService.js";
import Header from "../../../components/header/Header.jsx";

export default function Welcome() {
    return (
        <div>
            <Header/>
            <h1>Welcome</h1>
            {
                AuthService.isUserLocallyAuthenticated()
                    ?
                    <div>
                        <div>Вы можете загрузить файл на проверку</div>
                        <button>Загрузка</button>
                    </div>
                    :
                    <div>
                        <p>Для использования сервиса войдите зарегистрируйтесь</p>
                    </div>
            }
        </div>
    );
}
