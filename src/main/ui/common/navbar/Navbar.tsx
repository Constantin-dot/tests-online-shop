import React from 'react'
import { NavLink } from 'react-router-dom'

export type NavbarPropsType = {
    purchaseAmount: number
}

export const Navbar: React.FC<NavbarPropsType> = React.memo(({purchaseAmount}) => {
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
                    ?  <div className="badge bg-info text-dark">
                            {purchaseAmount + "$"}
                        </div>
                    : null}
            </li>
        </ul>
    </nav>
})
