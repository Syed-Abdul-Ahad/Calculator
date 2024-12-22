import styles from './Display.module.css'

const Display = ({displayVal})=>{
    return <input value={displayVal} className={styles.input} type="text" placeholder='Enter number here' readOnly/>
}

export default Display;