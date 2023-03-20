import TasksHeaderClose from '../../TasksHeaderClose/TasksHeaderClose';
import s from './First.module.css'
import desc_2 from '../../../assets/img/desc_2.svg'
import lama_fiol from '../../../assets/img/lama_fiol.svg' 

const First = () => {
    return (
        <div className={s.f_cont}>
            <TasksHeaderClose />
            <div className={s.tasks_item}>
                <div className={s.t_num}>1</div>
                <div className={s.t_title}>
                    <div className={s.t_title_i}>
                        Дыши
                    </div>
                </div>
            </div>
            <div className={s.t_desc}>
                <div className={s.desc_title}>оПИСАНИЕ:</div>
                <div className={s.desc_imgs}>
                    <img className={s.des_img} src={desc_2} alt="" />
                    <img className={s.des_lama} src={lama_fiol} alt="" />
                </div>
            </div>
            <div className={s.complete_btn}>Сделано</div>
        </div>
    )
}

export default First;