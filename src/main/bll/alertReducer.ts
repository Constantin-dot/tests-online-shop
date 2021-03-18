import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    visible: false,
    alertClass: "" as string,
    alertText: "" as string
}

export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<{alertClass: string, alertText: string}>) => {
            const {alertClass, alertText} = action.payload
            state.alertClass = alertClass
            state.alertText = alertText
            state.visible = true
        },
        hideAlert: state => {
            state.visible = false
            state.alertClass = ""
            state.alertText = ""
        }
    }
})

export const {showAlert, hideAlert} = alertSlice.actions

export type AlertStateType = typeof initialState