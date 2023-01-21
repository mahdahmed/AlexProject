import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    TextInput,
    FlatList,
    Platform,
    Switch
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AlarmNavigation, SendUppNavigation } from '../Stack'
// import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import { useTheme } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export function MenuTabs() {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarBackground:'#000',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarBackground: () => <View style={{ backgroundColor: colors.background, height: 80,borderWidth:0}}></View>,
                tabBarStyle: {

                    // right: 10,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80,
                    // backgroundColor: '#000',
                    paddingBottom: 0,
                    elevation: 0,
                    borderTopWidth:0
                    // shadowColor: "#000",
                    // shadowOpacity: 0.58,
                    // shadowRadius: 16.00,
                    // elevation: 50,
                },
            }}
        >
            <Tab.Screen
                name="alarmHome"
                component={AlarmNavigation}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: colors.border, borderWidth: 1, height: '100%', width: '100%', borderTopLeftRadius: 20 }}>
                            <Image source={require('../../Assets/Images/AlarmClock.png')} />
                            <Text style={{ color: colors.text }}>My Alarm</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="upp"
                component={SendUppNavigation}
                options={{
                
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: colors.border, borderWidth: 1, height: '100%', width: '100%', borderTopRightRadius: 20 }}>
                            <Image style={{height:35,width:35}} source={require('../../Assets/Images/contacts.png')} />
                            <Text style={{ color: colors.text }}>Send An Upp!</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}