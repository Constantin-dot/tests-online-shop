import React from 'react'
import { useDispatch } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { changeProductCountTC, ProductInCartType } from '../../bll/cartReducer'

export type ChosenProductsPropsType = {
    chosenProducts: Array<ProductInCartType>
}

export const ChosenProducts: React.FC<ChosenProductsPropsType> = ({chosenProducts}) => {
    const dispatch = useDispatch()

    const changeProductCountHandler = (id: string, actionValue: string, count: number) => {
        dispatch(changeProductCountTC(id, actionValue, count))
    }

    return <TransitionGroup 
        component="ul"
        className="list-group chosen-products-list"
    >
        {chosenProducts && chosenProducts.map(chosenProduct => (
            <CSSTransition
                key={chosenProduct.id}
                classNames={'product'}
                timeout={{
                    enter: 500,
                    exit: 350
                }}
                mountOnEnter
                unmountOnExit
            >
                <li className="list-group-item product item-in-cart">
                    <div className="item-box">
                        <h3>{chosenProduct.name}</h3>
                    </div>
                    <div className="item-box">
                        {chosenProduct.price + " $ per lb"}
                    </div>
                    <div className="weight-buttons">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-sm"
                            onClick={() => changeProductCountHandler(chosenProduct.id, "minus", chosenProduct.count)}
                        >
                            &minus;
                        </button>
                        <div className="weight">{`${chosenProduct.count} lbs`}</div>
                        <button 
                            type="button" 
                            className="btn btn-primary btn-sm"
                            onClick={() => changeProductCountHandler(chosenProduct.id, "plus", chosenProduct.count)}
                        >
                            &#43;
                        </button>
                    </div>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
}