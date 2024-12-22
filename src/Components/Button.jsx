import styles from './Button.module.css'

const Button = ({value, onButtonClick})=>{
    return  <button onClick={()=>onButtonClick(value)} className={styles.button}>{value}</button>
}


export default Button;