import Display from './Components/Display'
import ButtonContainer from './Components/ButtonContainer'
import styles from './App.module.css'


function App() {
  let container1 = ['C','1','2','3']
  let container2 = ['+','4','5','6']
  let container3 = ['-','7','8','9']
  let container4 = ['*','.','0','00']
  let container5 = ['/','*','%','AC']
  return (
    <>
    <div className={styles.calculator}>
      <Display/>
      <ButtonContainer container={container1}/>
      <ButtonContainer container={container2}/>
      <ButtonContainer container={container3}/>
      <ButtonContainer container={container4}/>
      <ButtonContainer container={container5}/>
    </div>

    </>
  )
}

export default App
