import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { calculateAmount, CartStateType } from '../../bll/cartReducer'
import { RootStateType } from '../../bll/store'

export const Navbar: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {purchaseAmount} = useSelector<RootStateType, CartStateType>(state => state.cart)

    return <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Online Shop
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/shopManagement"
                >
                    Shop management
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/"
                    exact
                >
                    Shop
                </NavLink>
            </li>
            <li className="nav-item cart-amount-block">
                <NavLink 
                    className="nav-link"
                    to="/cart"
                >
                    My cart
                </NavLink>
                {purchaseAmount > 0 
                    ?  <div className="cart-amount-item">
                            {purchaseAmount + "$"}
                        </div>
                    : null}
            </li>
        </ul>
    </nav>
})
