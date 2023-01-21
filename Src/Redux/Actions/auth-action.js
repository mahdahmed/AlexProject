import { BaseUrl } from '../../Constants/BaseUrl'
import axios from 'axios';


export const signIn = (data) => (dispatch) => {
    // console.log("action signIn", data)
    dispatch({ type: "loading" })

    return axios.post(`${BaseUrl}/signup`,
        data)
        .then((res) => {
            // console.log("actionnResponse", res)
            return dispatch({ type: "signInSuccess", response: res })

        }).catch((err) => {
            // console.log("actionnError", err)
            return dispatch({ type: "signInFail", error: err })
        })

}

export const codeVerification = (data) => (dispatch) => {
     console.log("action code", data)
    dispatch({ type: "loading" })

    return axios.post(`${BaseUrl}/verifyOtp`,
        data)
        .then((res) => {
            console.log("OTPResponse", res)
            return dispatch({ type: "OTPSuccess", response: res })

        }).catch((err) => {
            console.log("OTPError", err)
            return dispatch({ type: "OTPFail", error: err })
        })

}