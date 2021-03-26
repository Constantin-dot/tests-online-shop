import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, ShopStateType } from '../main/bll/shopReducer'
import { RootStateType } from '../main/bll/store'
import { Form } from '../main/ui/common/Form'
import { Loader } from '../main/ui/common/Loader'
import { ShopItems } from '../main/ui/common/ShopItems'

export const ShopManagement: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {formLoader, shopLoader, products} = useSelector<RootStateType, ShopStateType>(state => state.shop)
    
    useEffect(() => {
        dispatch(fetchProducts())
        // eslint-disable-next-line
    }, [])

    return <div>
        {formLoader ? <Loader/> : <Form/>}
        <hr/>
        {shopLoader ? <Loader/> : < ShopItems products={products}/>}
    </div>
})