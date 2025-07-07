import { useDispatch, useSelector } from "react-redux"
import {increment , decrement} from "./Redux/feature/counter/counterSlice"
import { useAppSelector } from "./Redux/hook";


function App() {

  const dispatch = useDispatch() ;
  const {count} = useAppSelector ((state)=>state.counter)


    const handleIncrement = (amount : number) => {
      dispatch(increment(amount))
    }

    
    const handleDecrement = () => {
      dispatch(decrement())
    }


  return (
  <div>
 <h1>COUNTER WITH REDUX</h1>
      <button  onClick={  ()=>  handleIncrement(5)}  >Increment by 5 </button>

      <button  onClick={  ()=>  handleIncrement(1)}  >Increment</button>
      <p>{count}</p>
      <button  onClick={handleDecrement} >  Decrement</button>



  </div>
    

    
  )
}

export default App
