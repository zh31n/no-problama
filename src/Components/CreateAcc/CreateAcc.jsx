import s from './CreateAcc.module.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'



const CreateAcc = () => {
    return (
        <div className={s.lama}>
            <img src={logo} className={s.logo} alt="" />
            <div className={s.backLama}>
                <div className={s.login_btns}>
                    <div className={s.inputs_login}>
                        <Input placeholder='имя' type='text'/>
                        <Input placeholder='Почта' type='email' />
                        <Input placeholder='Пароль' type='password' />
                        <Input placeholder='подтвердите пароль' type='password' />
                    </div>
                    <Link to={'/CreateAcc'} className={s.create_btn}>Отправить</Link>
                </div>
            </div>
        </div>
    )
}

export default CreateAcc;