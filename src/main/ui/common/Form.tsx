import React, { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { showAlert } from "../../bll/alertReducer"

export const Form = () => {
    const dispatch = useDispatch()
    
    const [value, setValue] = useState<string>('')

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (value.trim()) {
            dispatch(showAlert({alertClass: 'success',alertText: 'New product was added to product list.'}))
        } else {
            dispatch(showAlert({alertClass: 'warning',alertText: 'You need enter product name'}))
        }
    }

    return <form onSubmit={submitHandler}>
        <div className="form-group">
            <input 
                type="text" 
                className="form-control"
                placeholder="please, enter product name"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            />
        </div>
    </form>
}