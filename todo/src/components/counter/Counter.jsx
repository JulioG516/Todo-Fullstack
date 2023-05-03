import React from 'react'
import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'


function Counter() {
  const [count, setCount] = useState(0)


  const ResetCounter = () => {
    setCount(0)
  }
  

  function incrementCounterParentFunction(by) {
      setCount(count + by)
  }

  function decrementCounterParentFunction(by) {
      setCount(count - by)
  }

  return (
    <>
      <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <span className='totalCount'>{count}</span>
        <ResetButton resetMethod={ResetCounter}/>
    </>
  )
}

const ResetButton = ({resetMethod}) => {
  return (
    <div>
      <button className='resetButton' onClick={resetMethod}>Reset</button>
    </div>

  )
}

export default Counter