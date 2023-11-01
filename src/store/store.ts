import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {employeesSlice} from "../components/main/employeesSlice";
import {appSlice} from "../app/app.slice";

export const rootReducer = combineReducers({
    app: appSlice,
    employees: employeesSlice,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})







// @ts-ignore
window.store = store