import { configureStore } from "@reduxjs/toolkit"
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux"
import thunk from "redux-thunk"
import thunkMiddleware from 'redux-thunk'
import { alertSlice } from "./alertReducer"
import { firebaseSlice } from "./firebaseReducer"

export const rootReducer = combineReducers({
    alert: alertSlice.reducer,
    firebase: firebaseSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store