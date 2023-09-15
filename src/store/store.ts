import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { mainSlice } from "./mainSlice"

const rootReducer = combineReducers({mainSlice})

export const store = configureStore({
	reducer: rootReducer
})

export type TypeDispatch = typeof store.dispatch
export type TypeSelector = ReturnType<typeof store.getState>