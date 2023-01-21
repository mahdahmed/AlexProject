import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {MenuTabs} from '../Tab'

import { SignUpScreen } from '../../Screen/SignUp'
import { IntroScreen } from '../../Screen/Intro'
import { SplashScreen } from '../../Screen/Splash'
import { MyAlarmScreen } from '../../Screen/MyAlarm'
import { AddAlarmScreen } from '../../Screen/AddAlarm'
import { SettingScreen } from '../../Screen/Setting'
import { EditProfileScreen } from '../../Screen/EditProfile'
import {SendUppScreen} from '../../Screen/SendUpp'
import {FilterScreen} from '../../Screen/Filter'


const Stack = createNativeStackNavigator();




export function AppNavigation() {
    const [splash, setSplash] = useState(true)
    setTimeout(() => {
        setSplash(false)
    }, 1000);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} initialRouteName={splash ? "splash" : "signup"}
        >
            {splash ?
                <Stack.Screen name="splash" component={SplashScreen} />
                :
                <>
                    <Stack.Screen name="signup" component={SignUpScreen} />
                    <Stack.Screen name="intro" component={IntroScreen} />
                    <Stack.Screen name="tabs" component={MenuTabs} />
                </>

            }
        </Stack.Navigator>
    );
}

export function AlarmNavigation() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} initialRouteName={"myalarm"}
        >
            <Stack.Screen name="myalarm" component={MyAlarmScreen} />
            <Stack.Screen name="addalarm" component={AddAlarmScreen} />
            <Stack.Screen name="setting" component={SettingScreen} />
            <Stack.Screen name="editprofile" component={EditProfileScreen} />
            
        </Stack.Navigator>
    );
}

export function SendUppNavigation() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} initialRouteName={"sendUpp"}
        >
            <Stack.Screen name="sendUpp" component={SendUppScreen} />
            <Stack.Screen name="selfie" component={FilterScreen} />
            <Stack.Screen name="setting" component={SettingScreen} />
            <Stack.Screen name="editprofile" component={EditProfileScreen} />
            
        </Stack.Navigator>
    );
}