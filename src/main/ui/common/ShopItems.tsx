import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { removeProduct, ShopStateType } from "../../bll/shopReducer"
import { RootStateType } from "../../bll/store"
import { ProductType } from "../../dal/shop-api"

type ShopItemsPropsType = {
    products: Array<ProductType>
}

export const ShopItems: React.FC<ShopItemsPropsType> = React.memo(({products}) => {
    const dispatch = useDispatch()
    // const {} = useSelector<RootStateType, ShopStateType>(state => state.shop)

    return <TransitionGroup 
        component="ul"
        className="list-group"
    >
        {products && products.map(product => (
            <CSSTransition
                key={product.id}
                classNames={'product'}
                timeout={{
                    enter: 500,
                    exit: 350
                }}
                mountOnEnter
                unmountOnExit
            >
                <li className="list-group-item product">
                    <h3>{product.name}</h3>
                    {product.price + " $"}
                    <button 
                        type="button" 
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeProduct(product.id))}
                    >
                        &times;
                    </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
})