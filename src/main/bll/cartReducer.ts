import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import { ProductType } from "../dal/shop-api"
import { hideAlert, showAlert } from "./alertReducer"

const initialState = {
    purchaseAmount: 0 as number,
    productsInCart: [] as Array<ProductInCartType>,
    orderData: {} as OrderDataType
}

export const fetchProductsFromCart = () => (dispatch: Dispatch) => {
    dispatch(getChosenProducts())
    dispatch(calculateAmount())
}

export const addProductToCart = (product: ProductType) => (dispatch: Dispatch) => {
    dispatch(getChosenProducts())
    dispatch(addProduct({product}))
    dispatch(showAlert({alertClass: 'success', alertText: 'The product was added to cart.'}))
    dispatch(calculateAmount())
    setTimeout(() => dispatch(hideAlert()), 5000)
}

export const changeProductCountTC = (id: string, actionValue: string, count: number) => (dispatch: Dispatch) => {
    if (actionValue === "minus" && count === 1) {
        dispatch(getChosenProducts())
        dispatch(removeProductFromCart({id}))
        dispatch(calculateAmount())
    } else {
        dispatch(getChosenProducts())
        dispatch(changeProductCount({id, actionValue}))
        dispatch(calculateAmount())
    }
}

export const makeAnOrder = (name: string, surname: string, address: string, phone: string) => (dispatch: Dispatch) => {
    dispatch(saveOrderData({name, surname, address, phone}))
    dispatch(sendOrder())
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
        },
        addProduct: (state, action: PayloadAction<{product: ProductType}>) => {
            state.productsInCart.push({...action.payload.product, count: 1})
            localStorage.setItem('productsInCart', JSON.stringify( state.productsInCart))
        },
        calculateAmount: state => {
            state.purchaseAmount = 0
            for(let i = 0; i < state.productsInCart.length; i++) {
                let price = parseFloat(state.productsInCart[i].price)
                let sum = state.productsInCart[i].count * price
                let modifiedSum = Math.round(sum * 100) / 100
                state.purchaseAmount += modifiedSum
            }
            state.purchaseAmount = Math.round(state.purchaseAmount * 100) / 100 
        },
        changeProductCount: (state, action: PayloadAction<{id: string, actionValue: string}>) => {
            let product = state.productsInCart.find(p => p.id === action.payload.id)
            if (product && action.payload.actionValue === "plus") {
                product.count += 1
            } else if (product && action.payload.actionValue === "minus") {
                product.count -= 1
            }
            localStorage.setItem('productsInCart', JSON.stringify( state.productsInCart))
        },
        removeProductFromCart: (state, action: PayloadAction<{id: string}>) => {
            let index = state.productsInCart.findIndex(p => p.id === action.payload.id)
            if (index > -1) {
                state.productsInCart.splice(index, 1)
                localStorage.setItem('productsInCart', JSON.stringify( state.productsInCart))
            }
        },
        saveOrderData: (state, action: PayloadAction<{name: string, surname: string, address: string, phone: string}>) => {
            state.orderData.name = action.payload.name
            state.orderData.surname = action.payload.surname
            state.orderData.address = action.payload.address
            state.orderData.phone = action.payload.phone
        },
        sendOrder: state => {
            let data = JSON.stringify([state.orderData, state.productsInCart])
            alert(data)
        }
    }
})

export const {getChosenProducts, addProduct, calculateAmount, 
    changeProductCount, removeProductFromCart, saveOrderData, sendOrder} = cartSlice.actions
export type CartStateType = typeof initialState
export type ProductInCartType = {
    id: string
    name: string
    price: string
    count: number
}
export type OrderDataType = {
    name: string
    surname: string
    address: string
    phone: string
}