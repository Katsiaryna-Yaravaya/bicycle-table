import {combineReducers} from "redux";
import {bicycleReducer} from "./bicycleReducer";

export const rootReducer = combineReducers({
    bicycle: bicycleReducer
})

export type RootState = ReturnType<typeof rootReducer>