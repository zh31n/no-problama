import HeaderDialogs from '../HeaderDialogs/HeaderDialogs';
import s from './Dialog.module.css'
import btn_send from '../../assets/img/btn_send.svg'
import lama_ava from '../../assets/img/lama_ava.svg'
import msg_wh from '../../assets/img/msg_wh.svg'
import msg_yel from '../../assets/img/msg_yel.svg'
import ava_guy from '../../assets/img/ava_guy.svg'
import Termin from '../Modals/Termin/Termin';


const Dialog = () => {
    return (
        <div className="">
            <HeaderDialogs />
            <Termin />
            <div className={s.messages}>
                <div className={s.messages_i}>
                    <div className={s.message}>
                        <img src={lama_ava} alt="" />
                        <div className={s.message_item}>
                            <img src={msg_wh} alt="" />
                            <div className={s.message_item_i}>
                                Помните, что любовь - это ответственность для обоих.
                                <div className={s.msg_time}>13:12</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.message}>
                        <img src={lama_ava} alt="" />
                        <div className={s.message_item}>
                            <img src={msg_wh} alt="" />
                            <div className={s.message_item_i}>
                                4.	Приносит ли любовь боль? С чем это связано?
                                <div className={s.msg_time}>13:12</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.message} ${s.other}`}>
                        <div className={s.message_item}>
                            <div className={s.message_item_i}>
                                Лама...
                                <div className={s.msg_time}>13:12</div>
                            </div>
                            <img src={msg_yel} alt="" />
                        </div>
                        <img src={ava_guy} alt="" />
                    </div>
                    <div className={s.message}>
                        <img src={lama_ava} alt="" />
                        <div className={s.message_item}>
                            <img src={msg_wh} alt="" />
                            <div className={s.message_item_i}>
                                Любовь и унижение никогда не идут вместе.
                                <div className={s.msg_time}>13:12</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.message}>
                        <img src={lama_ava} alt="" />
                        <div className={s.message_item}>
                            <img src={msg_wh} alt="" />
                            <div className={s.message_item_i}>
                                Привет,<br />
                                Рад что ты вернулся!<br />
                                Вот тебе ежедневный факт
                                <div className={s.msg_time}>13:12</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.message}>
                        <img src={lama_ava} alt="" />
                        <div className={s.message_item}>
                            <img src={msg_wh} alt="" />
                            <div className={s.message_item_i}>
                                <div className={s.btn_modal_purple}>
                                    Вытеснение это?
                                </div>
                                P.s. Это кнопка, просто нажми на неё
                                <div className={s.msg_time}>13:12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.send_message}>
                <div className={s.send_message_i}>
                    <textarea placeholder='написать сообщение...' />
                    <img src={btn_send} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Dialog;