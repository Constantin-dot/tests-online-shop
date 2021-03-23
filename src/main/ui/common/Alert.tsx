import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AlertStateType, hideAlert } from "../../bll/alertReducer"
import { RootStateType } from "../../bll/store"
import { CSSTransition } from "react-transition-group"

type AlertPropsType = {
    
}

export const Alert: React.FC<AlertPropsType> = React.memo(() => {
    const dispatch = useDispatch()
    const {visible, alertClass, alertText} = useSelector<RootStateType, AlertStateType>(state => state.alert) 

    const hideHandler = () => {
        dispatch(hideAlert())
    }

    return <CSSTransition
        in={visible}
        timeout={{
            enter: 500,
            exit: 350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
    >
        <div className={`alert alert-${alertClass || 'warning'} alert-dismissible`}>
            <strong>Atention!</strong> {alertText}
            <button 
                type="button"
                className="close" 
                aria-label="Close"
                onClick={hideHandler}
            >
                <span aria-hidden="true">
                    &times;
                </span>
            </button>
        </div>
    </CSSTransition>
})


