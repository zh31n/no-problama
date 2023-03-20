import s from './CloseModules.module.css'

const CloseModules = (props) => {
    return (
        <div className={`${s.modal_modules} `}>
            {/* ${s.active} */}
            <div className={s.modal_i}>
                <div className={s.md_title}>Сколько всего<br /> модулей?</div>
                <div className={s.md_sup}>
                    Всего в noproblama вам<br /> доступно 11 модулей<br /> для прохождения
                </div>
            </div>
        </div>
    )
}

export default CloseModules;