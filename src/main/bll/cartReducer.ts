import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductType } from "../dal/shop-api"

const initialState = {
    purchaseAmount: 0 as number,
    productsInCart: [] as Array<ProductInCartType>,
    productsForPuttingInCart: [] as Array<ProductInCartType>
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getChosenProducts: state => {
            let products = localStorage.getItem('productsInCart')
            
            if(products) {
                state.productsInCart = JSON.parse(products)
            }   
            
            console.log(state.productsInCart);
            
        },
        addProductToCart: (state, action: PayloadAction<{product: ProductType}>) => {
            state.productsForPuttingInCart.push({...action.payload.product, count: 1})
            localStorage.setItem('productsInCart', JSON.stringify( state.productsForPuttingInCart))
        },
        calculateAmount: state => {
            debugger
            for(let i = 0; i < state.productsInCart.length; i++) {
                let price = parseFloat(state.productsInCart[i].price)
                state.purchaseAmount += price
            }
            console.log(state.purchaseAmount);
            
        }
    }
})

export const {getChosenProducts, addProductToCart, calculateAmount} = cartSlice.actions
export type CartStateType = typeof initialState
export type ProductInCartType = {
    id: string
    name: string
    price: string
    count: number
}
