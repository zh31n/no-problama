import s from './CloseTitle.module.css'

const CloseTitle = (props) => {
    return (
        <div className={`${s.modal_modules} `}>
            {/* ${s.active} */}
            <div className={s.modal_i}>
                <div className={s.md_title}>Как посмотреть<br /> прошлый модуль?</div>
                <div className={s.md_sup}>
                    Для этого вам нужно нажать<br/> на иконку с права в переписке<br/> с вашей ламой и вам<br/> откротся список прошлых модулей
                </div>
            </div>
        </div>
    )
}

export default CloseTitle;