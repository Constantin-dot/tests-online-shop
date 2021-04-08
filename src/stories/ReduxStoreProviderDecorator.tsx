import { combineReducers } from "redux";
import { RootStateType } from "../main/bll/store";
import { alertSlice } from "../main/bll/alertReducer"
import { shopSlice } from "../main/bll/shopReducer";
import { cartSlice } from "../main/bll/cartReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"

// const rootReducer: RootStateType = combineReducers({
//     alert: alertSlice.reducer,
//     shop: shopSlice.reducer,
//     cart: cartSlice.reducer
// })

const initialGlobalState: RootStateType = {
    alert: {
        visible: true,
        alertClass: "",
        alertText: ""
    },
    shop: {
        products: [
            {id: "1", name: "apple", price: "0.3"}, 
            {id: "2", name: "orange", price: "0.4"}, 
            {id: "3", name: "banana", price: "0.5"}
        ],
        formLoader: false,
        shopLoader: false
    },
    cart: {
        purchaseAmount: 9.99,
        productsInCart: [
            {id: "1", name: "apple", price: "0.3", count: 1}, 
            {id: "2", name: "orange", price: "0.4", count: 1}, 
            {id: "3", name: "banana", price: "0.5", count: 1}
        ], 
        orderData: {
            name: "Ivanov",
            surname: "Ivan",
            address: "Moscow",
            phone: "7777777"
        }
    }
}

// export const storyBookStore = configureStore({
//     reducer: rootReducer,
//     preloadedState: initialGlobalState,
//     middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
// })