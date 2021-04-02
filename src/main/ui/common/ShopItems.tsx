import React from "react"
import { useDispatch } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { removeProduct } from "../../bll/shopReducer"
import { ProductType } from "../../dal/shop-api"

type ShopItemsPropsType = {
    products: Array<ProductType>
}

export const ShopItems: React.FC<ShopItemsPropsType> = React.memo(({products}) => {
    const dispatch = useDispatch()

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
                    <div className={"item-box"}>
                        <h3>{product.name}</h3>
                    </div>
                    <div className={"item-box"}>
                        {product.price + " $"}
                    </div>
                    <div className={"item-box"}>
                        <button 
                            type="button" 
                            className="btn btn-danger btn-sm"
                            onClick={() => dispatch(removeProduct(product.id))}
                        >
                            &times;
                        </button>
                    </div>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
})