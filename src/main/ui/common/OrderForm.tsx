import { useFormik } from 'formik'
import React from 'react'

type OrderFormPropsType = {
    onSubmitHandler: (name: string, surname: string, address: string, phone: string) => void
}

export const OrderForm: React.FC<OrderFormPropsType> = ({onSubmitHandler}) => {
    
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            address: "",
            phone: ""
        },
        onSubmit: values => {
            onSubmitHandler(values.name, values.surname, values.address, values.phone)
        }
    })
    
    return <form className="jumbotron cartFormBlock form-group" onSubmit={formik.handleSubmit}>
        <input 
            className="form-control"
            placeholder="NAME"
            {...formik.getFieldProps("name")}
        />
        <input 
            className="form-control"
            placeholder="SURNAME"
            {...formik.getFieldProps("surname")}
        />
        <input 
            className="form-control"
            placeholder="ADDRESS"
            {...formik.getFieldProps("address")}
        />
        <input 
            className="form-control"
            placeholder="PHONE"
            {...formik.getFieldProps("phone")}
        />
        <button 
            type="submit"
            className="btn btn-primary"
        >
            ORDER
        </button>
    </form>
}