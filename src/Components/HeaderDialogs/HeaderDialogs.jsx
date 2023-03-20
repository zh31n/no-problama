import s from './HeaderDialogs.module.css'
import lama_ava from '../../assets/img/lama_ava.svg'
import burger_btn from '../../assets/img/btn_burger.svg'
import ava_yellow_lama from '../../assets/img/ava_yellow_lama.svg'
import ava_purple_lama from '../../assets/img/ava_purple_lama.svg'
import ava_grey_lama from '../../assets/img/ava_grey_lama.svg'


const HeaderDialogs = () => {
    return (
        <div className={`${s.header_dialogs} `}>
            {/* ${s.active} */}
            <div className={s.header_dialogs_i}>
                <div className={s.header_dialogs_hd}>
                    <div className={s.info_d}>
                        <img src={lama_ava} alt="" />
                        NoProblama
                    </div>
                    <img src={burger_btn} alt="" />
                </div>
                <div className={s.burger_modules}>
                    <div className={s.burger_modules_title}>модули:</div>
                    <div className={s.module_items}>
                        <div className={s.module_item}>
                            <img src={ava_yellow_lama} alt="" />
                            любовь
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_yellow_lama} alt="" />
                            Деньги
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_yellow_lama} alt="" />
                            В трудный момент
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_purple_lama} alt="" />
                            Зависимость
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                        <div className={s.module_item}>
                            <img src={ava_grey_lama} alt="" />
                            **********
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDialogs;