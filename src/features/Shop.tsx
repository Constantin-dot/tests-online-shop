import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, ProductsStateType } from '../main/bll/productsReducer'
import { RootStateType } from '../main/bll/store'
import { Form } from '../main/ui/common/Form'
import { Loader } from '../main/ui/common/Loader'
import { Products } from '../main/ui/common/Products'


export const Shop: React.FC = () => {
    const dispatch = useDispatch()
    const {formLoader, shopLoader, products} = useSelector<RootStateType, ProductsStateType>(state => state.products)
    
    useEffect(() => {
        dispatch(fetchProducts())
        // eslint-disable-next-line
    }, [])

    return <div>
        {formLoader ? <Loader/> : <Form/>}
        <hr/>
        {shopLoader ? <Loader/> : <Products products={products}/>}
    </div>
}