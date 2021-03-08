import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageForCart = () => {
    return <div>
        <div>Cart</div>
        <div>
            <NavLink to={'./shop'}>Back to shopping</NavLink>
        </div>
    </div>
}