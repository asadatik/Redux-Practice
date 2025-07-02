import { useDispatch } from "react-redux"
import {increment , decrement} from "./Redux/feature/counter/counterSlice"


function App() {

  const dispatch = useDispatch() ;

    const handleIncrement = () => {
      dispatch(increment())
    }

    
    const handleDecrement = () => {
      dispatch(decrement())
    }


  return (
    <>
     <h1>COUNTER WITH REDUX</h1>
      <button  onClick={handleIncrement}  >Increment</button>
      <p>0</p>
      <button  onClick={handleDecrement} >  Decrement</button>



    </>
  )
}

export default App
