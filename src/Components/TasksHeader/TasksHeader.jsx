import s from './TasksHeader.module.css'

const TasksHeader = (props) => {
    return(
        <div className={`${s.task_h} `}>
            <div className={s.task_h_i}>
                <span>задания</span>
                <span>4 / 21</span>
            </div>
        </div>
    )
}

export default TasksHeader;