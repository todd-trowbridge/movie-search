import { combineReducers } from "redux";
import testReducer from "./test/testReducer";
import favoritesReducer from "./favorites/favoritesReducer";

export { addNumber } from './test/testActions'
export { saveMovie } from './favorites/favoriteActions'

const rootReducer = combineReducers({ testReducer, favoritesReducer });

export default rootReducer;