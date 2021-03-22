import React from 'react'
import { ProductType } from '../../dal/productList-api'

type ProductsPropsType = {
    products: Array<ProductType>
}

export const Products: React.FC<ProductsPropsType> = ({products}) => {
    return <ul className="list-group">
        {products && products.map(product => (
            <li className="list-group-item product" key={product.id}>
                <h3>{product.name}</h3>
                {product.price}
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm"
                >
                    &times;
                </button>
            </li>
        ))}
    </ul>
}