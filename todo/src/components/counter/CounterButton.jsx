import React from 'react'
import './Counter.css'
import {PropTypes} from 'prop-types'


const CounterButton = ({by, incrementMethod, decrementMethod}) => {  
 

    return (
      <div className='Counter'>
        <div>
          <button className='counterButton' onClick={() => decrementMethod(by)}>-{by}</button>
          <button className='counterButton' onClick={() => incrementMethod(by)}>+{by}</button>
        </div>
      </div>
    )
  }


  
// validate type of by

CounterButton.propTypes = {
    by: PropTypes.number
  }
  
  CounterButton.defaultProps = {
    by : 1
  }


export default CounterButton