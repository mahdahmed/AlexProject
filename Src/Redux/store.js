// import {createStore,applyMiddleware,compose} from 'redux'
// import thunk from 'redux-thunk'
// import reducers from './Reducers'
// import { composeWithDevTools } from 'remote-redux-devtools';
// const middleware = [thunk];

// export const store=createStore(reducers,{}, composeWithDevTools(applyMiddleware(...middleware)))


import { applyMiddleware, createStore } from "redux";
import reducers from './Reducers'
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const presistedReducer = persistReducer(persistConfig, reducers );
const store = createStore(presistedReducer, 
composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export default store;
export { persistor };