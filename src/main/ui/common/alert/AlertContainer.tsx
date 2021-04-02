import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AlertStateType, hideAlert } from '../../../bll/alertReducer'
import { RootStateType } from '../../../bll/store'
import { Alert } from './Alert'

export const AlertContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {visible, alertClass, alertText} = useSelector<RootStateType, AlertStateType>(state => state.alert) 

    const hideAlertHandler = () => {
        dispatch(hideAlert())
    }
    
    return <>
        <Alert 
            alertClass={alertClass} 
            alertText={alertText} 
            visible={visible} 
            hideAlertHandler={hideAlertHandler}
        />
    </>
})