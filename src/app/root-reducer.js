import { combineReducers } from "redux";
import basketReducer from '../slices/basketSlice'

const rootReducer=combineReducers({
    basket:basketReducer})
export default rootReducer