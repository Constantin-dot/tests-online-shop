import { useFormik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { showAlert } from "../../bll/alertReducer"
import { addProduct } from "../../bll/shopReducer"


export const ProductForm: React.FC = React.memo(() => {
    const dispatch = useDispatch()

    const handleOnSubmit = (name: string, price: string) => {
        if (name.trim()) {
            dispatch(addProduct({name, price}))
        } else {
            dispatch(showAlert({alertClass: 'warning',alertText: 'You need enter product name!'}))
        }
    }
    
    const formik = useFormik({
        initialValues: {
            name: "",
            price: ""
        },
        onSubmit: values => {
            handleOnSubmit(values.name, values.price)
        }
    })
    
    return <form className="jumbotron productFormBlock form-group" onSubmit={formik.handleSubmit}>
        <input 
            className="form-control"
            placeholder="please, enter product name"
            {...formik.getFieldProps("name")}
        />
        <input 
            className="form-control"
            placeholder="please, enter product price"
            {...formik.getFieldProps("price")}
        />
        <button 
            type="submit"
            className="btn btn-outline-secondary"
        >
            Add new product
        </button>
    </form>
})
