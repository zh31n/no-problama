import s from './DownNav.module.css'
import tasks from '../../assets/img/flag.svg'
import dialog from '../../assets/img/dialog.svg'
import profile from '../../assets/img/profile.svg'
import { NavLink } from 'react-router-dom'

const DownNav = () => {
    return (
        <div className={s.nav}>
            <div className={s.nav_imgs}>
                <NavLink to={'/profile/tasks'}>
                    <img src={tasks} alt="" />
                </NavLink>
                <NavLink to={'/profile/dialog'}>
                    <img src={dialog} alt="" />
                </NavLink>
                <NavLink to={'/profile/main'}>
                    <img src={profile} alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default DownNav;