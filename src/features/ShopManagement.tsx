import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, ShopStateType } from '../main/bll/shopReducer'
import { RootStateType } from '../main/bll/store'
import { ProductForm } from '../main/ui/common/ProductForm'
import { ShopItems } from '../main/ui/common/ShopItems'
import { DnD } from '../main/ui/common/dNd/DnD'

export const ShopManagement: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {products} = useSelector<RootStateType, ShopStateType>(state => state.shop)
    
    useEffect(() => {
        dispatch(fetchProducts())
        // eslint-disable-next-line
    }, [])

    return <div>
        <ProductForm/>
        <hr/>
        <ShopItems products={products}/>
        <DnD />
    </div>
})