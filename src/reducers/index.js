import { combineReducers } from "redux";
import { reducer } from "redux-form";
import defectReducer from "./defectReducer";

export default combineReducers({
    defects: defectReducer,
    form: reducer //MUST BE EXPLICITLY WRITTEN LIKE THIS
});