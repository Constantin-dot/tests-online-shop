import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { alertSlice } from "./alertReducer"

const initialState = {
    products: [] as Array<ProductsListType>,
    loading: false
}

export const firebaseSlice = createSlice({
    name: "firebase",
    initialState,
    reducers: {
        showLoader: state => {
            state.loading = true
        },
        fetchProducts: (state, action: PayloadAction) => {

        },
        addProduct: (state, action: PayloadAction) => {

        },
        removeProduct: (state, action: PayloadAction) => {

        }
    }
})

export const {} = alertSlice.actions
export type FirebaseStateType = typeof initialState
export type ProductsListType = {
    id: string,
    title: string,
    description: string
}