import { ADD_NUMBER } from "./testTypes"


const initialState = {
  number: 10
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: return {
      ...state,
      number: state.number + 1
    }
    default: return state
  }
}

export default testReducer