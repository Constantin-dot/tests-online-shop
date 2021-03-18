import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AlertStateType, hideAlert } from "../../bll/alertReducer"
import { RootStateType } from "../../bll/store"

type AlertPropsType = {
    
}

export const Alert: React.FC<AlertPropsType> = React.memo(({}) => {
    const dispatch = useDispatch()
    const {visible, alertClass, alertText} = useSelector<RootStateType, AlertStateType>(state => state.alert) 

    const hideHandler = () => {
        dispatch(hideAlert())
    }

    if (!visible) {
        return null
    }
    
    return <div className={`alert alert-${alertClass || 'warning'} alert-dismissible`}>
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
})


