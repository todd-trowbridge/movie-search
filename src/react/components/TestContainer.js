import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNumber } from '../../redux'

function Test(props) {
  const testNumber = useSelector(state => state.number)
  const dispatch = useDispatch()
  return (
    <div>
      {/* button to run tests */}
      <br />
      <button onClick={() => dispatch(addNumber())}>+ 1</button>
      {/* display results */}
      <h2>number: {testNumber}</h2>
    </div>
  )
}

export default Test
