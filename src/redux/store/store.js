// import createStore from redux
import { createStore } from 'redux'

// import the test reducer
import rootReducer from '../index'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store