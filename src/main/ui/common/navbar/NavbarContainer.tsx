import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartStateType, fetchProductsFromCart } from "../../../bll/cartReducer"
import { RootStateType } from "../../../bll/store"
import { Navbar } from "./Navbar"


export const NavbarContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {purchaseAmount} = useSelector<RootStateType, CartStateType>(state => state.cart)

    useEffect( () => {
        dispatch(fetchProductsFromCart())
        // eslint-disable-next-line
    }, [])
    
    return <Navbar purchaseAmount={purchaseAmount} />
})