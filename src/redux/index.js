import { combineReducers } from "redux";
import testReducer from "./test/testReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import searchReducer from "./search/searchReducer"

export { addNumber } from './test/testActions'
export { saveMovie } from './favorites/favoriteActions'
export { saveSearch } from './search/searchActions'

const rootReducer = combineReducers({ testReducer, favoritesReducer, searchReducer });

export default rootReducer;