import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, ShopStateType } from '../main/bll/shopReducer'
import { RootStateType } from '../main/bll/store'
import { Loader } from '../main/ui/common/Loader'
import { Products } from '../main/ui/common/Products'


export const Shop: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {shopLoader, products} = useSelector<RootStateType, ShopStateType>(state => state.shop)
    
    useEffect(() => {
        dispatch(fetchProducts())
        // eslint-disable-next-line
    }, [])

    return <div>
        {shopLoader ? <Loader/> : <Products products={products}/>}
    </div>
})