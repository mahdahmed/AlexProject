/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { AppNavigation } from './Src/Navigation/Stack'
import { NavigationContainer } from '@react-navigation/native';

import { Provider, useSelector } from 'react-redux'
import  store ,{ persistor } from './Src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import { darkTheme, lightTheme } from './Src/Constants/Style/theme'

const NavCont = () => {
  const state = useSelector(state => state.themeReducer)
  return (
    <NavigationContainer
     theme={state == 'dark' ? darkTheme : lightTheme}
     >
      <AppNavigation />
    </NavigationContainer>)

}
const App = () => {

  return (

    <Provider store={store}>
      <PersistGate  persistor={persistor}>
      <NavCont />
      </PersistGate>
    </Provider>


  );
};


export default App;
