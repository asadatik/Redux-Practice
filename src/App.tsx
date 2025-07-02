import { useDispatch, useSelector } from "react-redux"
import {increment , decrement} from "./Redux/feature/counter/counterSlice"


function App() {

  const dispatch = useDispatch() ;
  const {count} = useSelector ((state)=>state.counter)


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
      <p>{count}</p>
      <button  onClick={handleDecrement} >  Decrement</button>



    </>
  )
}

export default App
