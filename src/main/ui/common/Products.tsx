import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../bll/productsReducer'
import { ProductType } from '../../dal/productList-api'
import { TransitionGroup, CSSTransition } from "react-transition-group"

type ProductsPropsType = {
    products: Array<ProductType>
}

export const Products: React.FC<ProductsPropsType> = React.memo(({products}) => {
    const dispatch = useDispatch()

    return <TransitionGroup 
        component="ul"
        className="list-group"
    >
        {products && products.map(product => (
            <CSSTransition
                key={product.id}
                classNames={'product'}
                timeout={800}
            >
                <li className="list-group-item product">
                    <h3>{product.name}</h3>
                    {product.price}
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => dispatch(removeProduct(product.id))}
                    >
                        &times;
                    </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
})