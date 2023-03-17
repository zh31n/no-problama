import s from './SexYear.module.css'
import logo from '../../assets/img/Logo.svg'
import { Link } from 'react-router-dom'
import Input from '../../Input/Input'



const SexYear = () => {
    return (
        <div className={s.lama}>
            <img src={logo} className={s.logo} alt="" />
            <div className={s.backLama}>
                <div className={s.login_btns}>
                    <span className={s.title_sex}>выберите пол</span>
                    <div className={s.sex_btns}>
                        <div className={s.sex_btn}>Мужчина</div>
                        <div className={s.sex_btn}>Женщина</div>
                    </div>
                    <div className={s.inputs_login}>
                        <Input placeholder='Введите ваш возраст' type='number' />
                    </div>
                    <Link to={'/CreateAcc'} className={s.create_btn}>
                        Отправить
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SexYear;