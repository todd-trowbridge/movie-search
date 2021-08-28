import { SAVE_SEARCH } from "./searchType";

// initial empty state
const initialState = {
  searches: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        searches: [...state.searches, action.searchTerm],
      };
    default:
      return state;
  }
};

export default searchReducer;
