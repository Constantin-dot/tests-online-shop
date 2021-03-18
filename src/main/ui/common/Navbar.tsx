import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Online Shop
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/"
                    exact
                >
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/shop"
                >
                    Shop
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/cart"
                >
                    My cart
                </NavLink>
            </li>
        </ul>
    </nav>
)