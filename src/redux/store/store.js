// import createStore from redux
import { createStore } from 'redux'

// import the test reducer
import testReducer from '../test/testReducer'

const store = createStore(testReducer)

export default store