import s from './Input.module.css'

const Input = (props) => {
    return(
        <input className={s.Input} type={props.type} placeholder={props.placeholder} />
    )
}

export default Input;