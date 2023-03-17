import s from './PageLogo.module.css'
import logo from '../../assets/img/Logo.svg'

const PageLogo = () => {
    return (
        <div className={s.page_logo}>
            <img className={s.logo} src={logo} alt="" />
            <svg width="390" height="22" viewBox="0 0 390 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="-84" cy="474" r="474" fill="#B19FF5" />
            </svg>
        </div>
    )
}

export default PageLogo;