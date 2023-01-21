import {combineReducers} from 'redux'

import themeReducer from './theme-reducer'
import signInReducer from './auth/signIn-reducer'
import codeVerfyReducer from './auth/codeVerify-reducer'



const reducers=combineReducers({
    themeReducer:themeReducer,
    signInReducer:signInReducer,
    codeVerfyReducer:codeVerfyReducer
})


export default reducers