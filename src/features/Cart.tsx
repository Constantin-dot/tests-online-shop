import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { CartStateType, getChosenProducts, makeAnOrder } from '../main/bll/cartReducer'
import { RootStateType } from '../main/bll/store'
import { ChosenProducts } from '../main/ui/common/ChosenProducts'
import { OrderForm } from '../main/ui/common/OrderForm'

export const Cart: React.FC = React.memo(() => {
    const {productsInCart, purchaseAmount} = useSelector<RootStateType, CartStateType>(state => state.cart)
    const dispatch = useDispatch()

    const onSubmitHanler = useCallback((name: string, surname: string, address: string, phone: string) => {
        dispatch(makeAnOrder(name, surname, address, phone))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
       dispatch(getChosenProducts())
       // eslint-disable-next-line
    }, [])

    return <div className="cart">
        <div className="cart-list">
            <ChosenProducts chosenProducts={productsInCart}/>
            <strong>{`Total : ${purchaseAmount}$`}</strong>
        </div>
        
        <OrderForm onSubmitHandler={onSubmitHanler}/>
    </div>
})