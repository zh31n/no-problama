import s from './Helper.module.css'
import logo from '../../assets/img/Logo.svg'
import helperImg from '../../assets/img/helper_lama.svg'
import helperMsg from '../../assets/img/helper.svg'



const Helper = () => {
    return (
        <div className={s.lama}>
            <img src={logo} className={s.logo} alt="" />
            <div className={s.lamaHelper}>
                <div className={s.help_img}>
                    <img className={s.lama_msg} src={helperMsg} alt="" />
                    <img className={s.lama_img} src={helperImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Helper;