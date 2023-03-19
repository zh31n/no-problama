import s from './DownNav.module.css'
import tasks from '../../assets/img/flag.svg'
import dialog from '../../assets/img/dialog.svg'
import profile from '../../assets/img/profile.svg'

const DownNav = () => {
    return(
        <div className={s.nav}>
            <div className={s.nav_imgs}>
                <img src={tasks} alt="" />
                <img src={dialog} alt="" />
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default DownNav;