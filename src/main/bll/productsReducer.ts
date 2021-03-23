import { RootStateType} from './store'
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateProductType, productListAPI } from "../dal/productList-api"
import { showAlert } from './alertReducer'


const initialState = {
    products: [] as Array<ProductType>,
    formLoader: false,
    shopLoader: false
}

export const fetchProducts = createAsyncThunk<
    unknown,
    undefined,
    {rejectValue: string, state: RootStateType}
    >("products/fetchProducts/TC",
    async (arg, {dispatch}) => {
        const res = await productListAPI.fetchProducts()
        const payload: Array<ProductType> = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch(getProducts(payload))
        // console.log(payload);
    }
)

export const addProduct = createAsyncThunk<
    unknown, 
    CreateProductType, 
    {rejectValue: string, state: RootStateType}
    >("products/addProductTC", 
    async (product, {rejectWithValue, dispatch}) => {
        try {
            await productListAPI.addProduct(product)
            dispatch(showAlert({alertClass: 'success', alertText: 'New product was added to product list.'}))
            dispatch(fetchProducts())
        } catch (e) {
            return rejectWithValue(e.response ? e.response.data.error : "unknown error")
        }
    }
)

export const removeProduct = createAsyncThunk<
    unknown,
    string,
    {rejectValue: string, state: RootStateType}
    >("products/removeProductTC", 
    async (id, {rejectWithValue, dispatch}) => {
        try {
            await productListAPI.removeProduct(id)
            dispatch(showAlert({alertClass: 'success', alertText: 'Product was removed from product list.'}))
            dispatch(fetchProducts())
        } catch (e) {
            return rejectWithValue(e.response ? e.response.data.error : "unknown error")
        }
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

export const {getProducts, shopLoading} = productsSlice.actions
export type ProductsStateType = typeof initialState
export type ProductType = {
    id: string
    name: string
    price: string
}