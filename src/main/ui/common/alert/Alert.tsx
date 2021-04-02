import React from "react"
import { CSSTransition } from "react-transition-group"

export type AlertPropsType = {
    visible: boolean
    alertClass: string
    alertText: string
    hideAlertHandler: () => void
}

export const Alert: React.FC<AlertPropsType> = React.memo(({visible, alertClass, alertText, hideAlertHandler}) => {
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
                onClick={hideAlertHandler}
            >
                <span aria-hidden="true">
                    &times;
                </span>
            </button>
        </div>
    </CSSTransition>
})


