import s from './TasksHeaderClose.module.css'
import close from '../../assets/img/close.svg'
import { NavLink } from 'react-router-dom';

const TasksHeaderClose = (props) => {
    return (
        <div className={`${s.task_h} `}>
            <div className={s.task_h_i}>
                <div className="">
                    <span>задания</span>
                    <span>4 / 21</span>
                </div>
                <NavLink to={'/profile/tasks/main'}>
                    <img src={close} alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default TasksHeaderClose;