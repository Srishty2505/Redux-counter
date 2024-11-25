import { useDispatch, useSelector } from 'react-redux'
import {incrementCount , decrementCount} from "./slice"

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=> {
        console.log(state.count);
        return state.counter.count ;
    });
    
  return ( 
    <>
    <button onClick={() => dispatch(incrementCount())}>Increment</button>
    <p>{count}</p>
    <button onClick={() => dispatch(decrementCount())}>Decrement</button>
    </>
    
  )  
}

export default Counter