import s from './Lama.module.css'
import logo from '../../assets/img/Logo.svg'
import lamaImg from '../../assets/img/lama_f.svg'


const Lama = () => {
    return(
        <div className={s.lama}>
            <img src={logo} className={s.logo} alt="" />
            <div className={s.backLama}>
                <img src={lamaImg} alt="" />
            </div>
        </div>
    )
}

export default Lama;