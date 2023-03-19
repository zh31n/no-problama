import s from './Login.module.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'



const Login = () => {
    return (
        <div className={s.lama}>
            <img src={logo} className={s.logo} alt="" />
            <div className={s.backLama}>
                <div className={s.login_btns}>
                    <div className={s.inputs_login}>
                        <Input placeholder='Почта' type='email' />
                        <Input placeholder='Пароль' type='password' />
                    </div>
                    <Link to={'/CreateAcc'} className={s.create_btn}>Отправить</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;