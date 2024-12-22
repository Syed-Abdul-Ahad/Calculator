import Button from "./Button";
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({ container, onButtonClick}) => {

  return (
    <div className={styles.buttonContainer}>
        {
        container.map((item)=>{
            return <Button key={item} onButtonClick={onButtonClick} value={item}></Button>
        })
        }
    </div>
  );
};

export default ButtonContainer;
