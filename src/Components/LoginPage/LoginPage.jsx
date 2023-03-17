import s from './LoginPage.module.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'



const LoginPage = () => {
    return (
        <div className={s.lama}>
            <img src={logo} className={s.logo} alt="" />
            <div className={s.backLama}>
                <div className={s.login_btns}>
                    <div className={s.login_btn}>Войти</div>
                    <Link to={'/CreateAcc'} className={s.create_btn}>Создать аккаунт</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;