import { NavLink } from 'react-router-dom';
import TasksHeader from '../TasksHeader/TasksHeader';
import s from './TasksPage.module.css'

const TasksPage = () => {
    return (
        <div className="">
            <TasksHeader class={'s.active'} />
            <div className={s.tasks_items}>
                <NavLink to={'/profile/tasks/1'} className={s.tasks_item}>
                    <div className={s.t_num}>1</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            Дыши
                        </div>
                    </div>
                </NavLink>
                <div className={s.tasks_item}>
                    <div className={s.t_num}>2</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            сигналы
                        </div>
                    </div>
                </div>
                <div className={s.tasks_item}>
                    <div className={s.t_num}>3</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            Комната <br />в вашей голове
                        </div>
                    </div>
                </div>
                <div className={s.tasks_item}>
                    <div className={s.t_num}>4</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            Сделайте одно действие сознательно
                        </div>
                    </div>
                </div>
                <NavLink to={'/profile/tasks/2'}
                    className={`${s.tasks_item} ${s.skip}`}>
                    <div className={s.t_num}>5</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            Сознательно слушайте
                        </div>
                    </div>
                </NavLink>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
                <div className={`${s.tasks_item} ${s.unk}`}>
                    <div className={s.t_num}>*</div>
                    <div className={s.t_title}>
                        <div className={s.t_title_i}>
                            ***
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TasksPage;