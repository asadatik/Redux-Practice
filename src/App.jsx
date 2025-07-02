import { useDispatch } from "react-redux"



function App() {

  const dispatch = useDispatch() ;

    

  return (
    <>
     <h1>COUNTER WITH REDUX</h1>
      <button>Increment</button>
      <p>0</p>
      <button>Decrement</button>



    </>
  )
}

export default App
