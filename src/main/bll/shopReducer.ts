import { RootStateType} from './store'
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateProductType, productListAPI, ProductType } from "../dal/shop-api"
import { hideAlert, showAlert } from './alertReducer'

const initialState = {
    products: [] as Array<ProductType>,
    formLoader: false,
    shopLoader: false
}

export const fetchProducts = createAsyncThunk<
    unknown,
    undefined,
    {rejectValue: string, state: RootStateType}
    >("shop/fetchProducts/TC",
    async (arg, {dispatch}) => {
        
        const res = await productListAPI.fetchProducts()
        if (res.data) {
            const payload: Array<ProductType> = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            dispatch(getProducts(payload))
        } else {
            dispatch(clearProductsList())
        }
    }
)

export const addProduct = createAsyncThunk<
    unknown, 
    CreateProductType, 
    {rejectValue: string, state: RootStateType}
    >("shop/addProductTC", 
    async (product, {dispatch}) => {
        try {
            await productListAPI.addProduct(product)
            dispatch(showAlert({alertClass: 'success', alertText: 'New product was added to product list.'}))
            dispatch(fetchProducts())
            setTimeout(() => dispatch(hideAlert()), 5000)
        } catch (e) {
            // return rejectWithValue(e.response ? e.response.data.error : "unknown error")
            console.log(e);
        }
    }
)

export const removeProduct = createAsyncThunk<
    unknown,
    string,
    {rejectValue: string, state: RootStateType}
    >("shop/removeProductTC", 
    async (id, {dispatch}) => {
        try {
            await productListAPI.removeProduct(id)
            dispatch(showAlert({alertClass: 'success', alertText: 'Product was removed from product list.'}))
            dispatch(fetchProducts())
            setTimeout(() => dispatch(hideAlert()), 5000)
        } catch (e) {
            // return rejectWithValue(e.response ? e.response.data.error : "unknown error")
            console.log(e);
            
        }
    }
)

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        shopLoading: (state, action: PayloadAction<{value: boolean}>) => {
            state.shopLoader = action.payload.value
        },
        getProducts: (state, action: PayloadAction<Array<ProductType>>) => {
            state.products = action.payload
        },
        clearProductsList: state => {
            state.products = []
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
            .addCase(removeProduct.pending, state => {
                state.shopLoader = true
            })
            .addCase(removeProduct.fulfilled, state => {
                state.shopLoader = false
            })
            .addCase(removeProduct.rejected, state => {
                state.shopLoader = false
            })
    }
})

export const {getProducts, shopLoading, clearProductsList} = shopSlice.actions
export type ShopStateType = typeof initialState
