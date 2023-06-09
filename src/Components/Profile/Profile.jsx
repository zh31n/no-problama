import s from './Profile.module.css';
import btnShest from '../../assets/img/shesterny.svg';
import ava from '../../assets/img/ava.svg';
import complete from '../../assets/img/complete.svg';
import quest from '../../assets/img/quest.svg';
import fire from '../../assets/img/fire.svg';
import arrow_left from '../../assets/img/arrow_left_main.svg'
import CloseModules from '../Modals/CloseModules/CloseModules';
import CloseTitle from '../Modals/CloseTitle/CloseTitle';

const Profile = (props) => {
    return (
        <div className="">
            <CloseModules />
            <CloseTitle />
            <div className={`${s.profile_sett} `}>
                {/* ${s.active} дописываешь в скобки и появляеться выпадашка */}
                <div className={s.profile_i}>
                    <div className={s.up_line}>
                        <h1>Профиль</h1>
                        <h1 className={s.title_sett}>Настройки</h1>
                        <img className={s.btnShest} src={btnShest} alt="" />
                    </div>
                    <div className={s.u_info}>
                        <div className={s.u_img}>
                            <img src={ava} alt="" />
                        </div>
                        <div className={s.u_name}>Какое-то имя</div>
                        <div className={s.u_email}>Оченьдлиннаяпочта@gmail.com</div>
                    </div>
                    <div className={s.u_stats}>
                        <div className={s.stat}>
                            <div className={s.count}>
                                5<img src={complete} alt="" />
                            </div>
                            <div className={s.title}>
                                Сделанных<br />заданий
                            </div>
                        </div>
                        <div className={s.stat}>
                            <div className={s.count}>
                                12<img src={quest} alt="" />
                            </div>
                            <div className={s.title}>
                                пройдённых<br />вопросов
                            </div>
                        </div>
                        <div className={s.stat}>
                            <div className={s.count}>
                                2<img src={fire} alt="" />
                            </div>
                            <div className={s.title}>
                                Дней <br />подряд
                            </div>
                        </div>
                    </div>
                    <div className={s.settings_profile}>
                        <div className={s.sett_sex}>
                            <div className={s.sex_title}>Пол:</div>
                            <div className={s.sex_btns}>
                                <div className={`${s.sex_btn} ${s.active}`}>Мужчина</div>
                                <div className={s.sex_btn}>Женщина</div>
                            </div>
                        </div>
                        <div className={s.set_age}>
                            Возраст:
                            <input type="text" placeholder='21'/> 
                        </div>
                        <div className={`${s.set_age} ${s.pass}`}>
                            Пароль:
                            <input type="password" placeholder='*******'/> 
                        </div>
                        <div className={s.btns_save}>
                            <div className={s.btn_s}>Отменить</div>
                            <div className={s.btn_s}>сохранить</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.modules_prof}>
                <div className={s.module}>
                    <div className={s.count}>3</div>
                    <div className={s.module_title}>
                        Закрытых<br />модулей
                    </div>
                    <div className={s.module_sup}>
                        Сколько<br /> всего<br /> модулей?
                    </div>
                    <img src={arrow_left} alt="" />
                </div>
                <div className={s.module}>
                    <div className={s.count}>4</div>
                    <div className={s.module_title}>
                        Пройдено<br />тем
                    </div>
                    <div className={s.module_sup}>
                        Как<br /> посмотреть<br /> прошлый<br /> модуль?
                    </div>
                    <img src={arrow_left} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Profile;