import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { alertSlice } from "./alertReducer"
import { productsSlice } from "./productsReducer"

export const rootReducer = combineReducers({
    alert: alertSlice.reducer,
    products: productsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,

})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.__store__ = store