import { RootStateType} from './store'
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateProductType } from "../dal/productList-api"
import { showAlert } from './alertReducer'
import firebase from 'firebase'



const productsRef = firebase.database().ref('products/')

const initialState = {
    products: [] as Array<ProductType>,
    formLoader: false,
    shopLoader: false
}

export const addProduct = createAsyncThunk<
    unknown, 
    CreateProductType, 
    {rejectValue: string, state: RootStateType}
    >("products/addProductTC", 
    (product, {dispatch}) => {
        productsRef.push (product)
        dispatch(showAlert({alertClass: 'success',alertText: 'New product was added to product list.'}))
    }
)

export const fetchProducts = createAsyncThunk<
    unknown,
    undefined,
    {rejectValue: string, state: RootStateType}
    >("products/fetchProducts/TC",
    (arg, {dispatch}) => {
        
            productsRef.on("value", function(snapshot) {
                const res = snapshot.val(); 
                
                const payload: Array<ProductType> = Object.keys(res).map(key => {
                    return {
                        ...res[key],
                        id: key
                    }
                })
                dispatch(getProducts(payload))
            }, function (error: any) {
                console.log("Error: " + error.code);
            })
       
    }
)


export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        shopLoading: (state, action: PayloadAction<{value: boolean}>) => {
            state.shopLoader = action.payload.value
        },
        getProducts: (state, action: PayloadAction<Array<ProductType>>) => {
            state.products = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.shopLoader = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.shopLoader = false
            })
            .addCase(fetchProducts.rejected, state => {
                state.shopLoader = false
            })
            .addCase(addProduct.pending, state => {
                state.formLoader = true
            })
            .addCase(addProduct.fulfilled, state => {
                state.formLoader = false
            })
            .addCase(addProduct.rejected, state => {
                state.formLoader = false
            })
    }
})

export const {getProducts, shopLoading} = productsSlice.actions
export type ProductsStateType = typeof initialState
export type ProductType = {
    id: string
    name: string
    price: string
}