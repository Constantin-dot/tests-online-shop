import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import { ProductType } from "../dal/shop-api"
import { hideAlert, showAlert } from "./alertReducer"

const initialState = {
    purchaseAmount: 0 as number,
    productsInCart: [] as Array<ProductInCartType>,
    productsForPuttingInCart: [] as Array<ProductInCartType>
}

export const fetchProductsFromCart = () => (dispatch: Dispatch) => {
    dispatch(getChosenProducts())
    dispatch(calculateAmount())
}

export const addProductToCart = (product: ProductType) => (dispatch: Dispatch) => {
    dispatch(addProduct({product}))
    dispatch(showAlert({alertClass: 'success', alertText: 'The product was added to cart.'}))
    dispatch(calculateAmount())
    setTimeout(() => dispatch(hideAlert()), 5000)
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
        addProduct: (state, action: PayloadAction<{product: ProductType}>) => {
            state.productsForPuttingInCart.push({...action.payload.product, count: 1})
            localStorage.setItem('productsInCart', JSON.stringify( state.productsForPuttingInCart))
        },
        calculateAmount: state => {
            
            for(let i = 0; i < state.productsInCart.length; i++) {
                let price = parseFloat(state.productsInCart[i].price)
                state.purchaseAmount += price
            }
            console.log(state.purchaseAmount);
            
        }
    }
})

export const {getChosenProducts, addProduct, calculateAmount} = cartSlice.actions
export type CartStateType = typeof initialState
export type ProductInCartType = {
    id: string
    name: string
    price: string
    count: number
}
