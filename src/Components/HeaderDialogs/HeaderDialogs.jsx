import s from './HeaderDialogs.module.css'
import lama_ava from '../../assets/img/lama_ava.svg'
import burger_btn from '../../assets/img/btn_burger.svg'


const HeaderDialogs = () => {
    return (
        <div className={s.header_dialogs}>
            <div className={s.header_dialogs_i}>
                <div className={s.info_d}>
                    <img src={lama_ava} alt="" />
                    NoProblama
                </div>
                <img src={burger_btn} alt="" />
            </div>
        </div>
    )
}

export default HeaderDialogs;