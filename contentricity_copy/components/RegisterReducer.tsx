import React from "react"
import { initialState } from "../pages/Register/index"
interface ActionTypes {
    type: string,
    payload?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>
    field?: string
}
const emailExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

const RegisterReducer = (state: typeof initialState, action: ActionTypes): typeof initialState => {
    const { type, payload, field } = action
    switch (type) {
        case "Input":
            console.log(payload)
            if (payload?.target.type === "checkbox") {
                if (field === "isTermsAccepted") {

                    return {
                        ...state,
                        inputs: { ...state.inputs, isTermsAccepted: !state.inputs.isTermsAccepted },
                        errors: { ...state.errors, isTermsAccepted: !state.errors.isTermsAccepted }
                    }
                } else {
                    return {
                        ...state,
                        inputs: { ...state.inputs, isPrivacyAccepted: !state.inputs.isPrivacyAccepted },
                        errors: { ...state.errors, isPrivacyAccepted: !state.errors.isPrivacyAccepted }
                    }
                }
            } else {

                return {
                    ...state,
                    inputs: { ...state.inputs, [payload!.target.name]: payload!.target.value },
                    errors: { ...state.errors, [payload!.target.name]: "" }
                }
            }
        case "Submit":
            if (state.inputs.name.trim().length === 0) {
                return { ...state, errors: { ...state.errors, name: "This field is required" } }
            } else if (state.inputs.email.trim().length === 0) {
                return { ...state, errors: { ...state.errors, email: "This field is required" } }
            } else if (!(state.inputs.email.match(emailExp))) {
                return { ...state, errors: { ...state.errors, email: "Please Enter a Proper Email" } }
            } else if (state.inputs.password.trim().length === 0) {
                return { ...state, errors: { ...state.errors, password: "This field is required" } }

            } else if (state.inputs.cPassword.trim().length === 0) {
                return { ...state, errors: { ...state.errors, cPassword: "This field is required" } }

            } else if (state.inputs.password !== state.inputs.cPassword) {
                return { ...state, errors: { ...state.errors, cPassword: "Both passwords should match" } }

            } else if (!state.inputs.isTermsAccepted) {
                return { ...state, errors: { ...state.errors, isTermsAccepted: false } }

            } else if (!state.inputs.isPrivacyAccepted) {
                return { ...state, errors: { ...state.errors, isPrivacyAccepted: false } }

            }
            return state
        default:
            return state
    }

}
export default RegisterReducer