import TasksHeaderClose from '../../TasksHeaderClose/TasksHeaderClose';
import s from './Second.module.css'
import desc_1 from '../../../assets/img/desc_1.svg'
import lama_fiol from '../../../assets/img/lama_fiol.svg'

const Second = () => {
    return (
        <div className={s.f_cont}>
            <TasksHeaderClose />
            <div className={s.tasks_item}>
                <div className={s.t_num}>5</div>
                <div className={s.t_title}>
                    <div className={s.t_title_i}>
                        Сознательно слушайте
                    </div>
                </div>
            </div>
            <div className={s.t_desc}>
                <div className={s.desc_title}>оПИСАНИЕ:</div>
                <div className={s.desc_imgs}>
                    <img className={s.des_img} src={desc_1} alt="" />
                    <img className={s.des_lama} src={lama_fiol} alt="" />
                </div>
            </div>
            <div className={s.complete_btn}>Готово!</div>
        </div>
    )
}

export default Second;