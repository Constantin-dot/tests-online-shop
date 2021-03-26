import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { calculateAmount, CartStateType, getChosenProducts } from '../main/bll/cartReducer'
import { RootStateType } from '../main/bll/store'

export const Cart = () => {
    const {} = useSelector<RootStateType, CartStateType>(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getChosenProducts())
    }, [])

    return <div>
        <div>Cart</div>
        <button onClick={() => dispatch(calculateAmount())}>sum</button>
    </div>
}