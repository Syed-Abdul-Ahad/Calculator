import Display from './Components/Display'
import ButtonContainer from './Components/ButtonContainer'
import styles from './App.module.css'
import { useState } from 'react'


function App() {

  const Array = [
    'C', '1', '2', '3', 
    '+', '4', '5', '6', 
    '-', '7', '8', '9', 
    '*', '.', '0', '00', 
    '/', '=', '%', 'AC'
  ];

  const [calVal,setCalVal] = useState("");

  const onButtonClick = (value)=>{
    let newVal = value;

    if(newVal == 'C'){
      setCalVal((prev)=>prev.slice(0,-1))
    }
    else if(newVal == 'AC'){
      setCalVal("")
    }
    else if(newVal == '='){
      let result = eval(calVal)
      setCalVal(result)
    }
    else{
      setCalVal([...calVal,newVal].join(''))
    }
  }

  return (
    <>
    <div className={styles.calculator}>
      <Display displayVal={calVal}/>
      <ButtonContainer container={Array} onButtonClick={onButtonClick}/>
    </div>

    </>
  )
}

export default App
