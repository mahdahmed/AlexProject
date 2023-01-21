import React, { useState } from 'react';
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
    Platform
} from 'react-native';
import { IntroSliderBtn } from '../Buttons'
import {useDispatch} from 'react-redux'
import {darkTheme,lightTheme} from '../../Redux/Actions/theme-action'

import { useTheme } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;

export const ThemeSelect = ({nextButton}) => {

  const dispatch = useDispatch()
  const { colors } = useTheme();
//   console.warn(deviceHeight*0.08)
    return (
    
        <View style={{
            flex:1,
            marginTop: deviceHeight*0.05,
            alignItems: 'center',
        }}>
       
            <Text style={{ color: colors.text, fontSize: 16 }}>Light or Dark</Text>
            <Text style={{ color: 'gray', marginTop: deviceHeight*0.03 }}>Please Select Light or Dark Mode For Your Preference.</Text>

            <View style={{
                marginTop: deviceHeight*0.08,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <View style={{
                    borderRadius: 20,
                    width: '35%',
                }}
                >
                    <View style={{
                        borderWidth: 1,
                        borderColor: colors.border,
                        borderRadius: 20,
                        height: 135,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={{ height: '60%', width: '60%' }} source={require('../../Assets/Images/blackClock.png')} />
                    </View>
                    <TouchableOpacity onPress={()=>dispatch(lightTheme('light'))} style={{
                        height:40,
                        borderRadius: 10,
                        backgroundColor:'#fff',
                        marginTop:15,
                        alignItems:'center',
                        justifyContent:'center',
                        borderWidth: 1,
                        borderColor: colors.border
                    }}>
                        <Text style={{color:'#000'}}>Light Mode</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderRadius: 20,
                    width: '35%',
                }}
                >
                    <View style={{
                        borderWidth: 1,
                        borderColor: colors.border,
                        borderRadius: 20,
                        height: 135,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'#000'
                    }}>
                        <Image style={{ height: '60%', width: '60%' }} source={require('../../Assets/Images/Clock.png')} />
                    </View>
                    <TouchableOpacity onPress={()=>dispatch(darkTheme('dark'))} style={{
                       height:40,
                       borderRadius: 10,
                     backgroundColor:'#000',
                       marginTop:15,
                       alignItems:'center',
                       justifyContent:'center',
                       borderWidth: 1,
                       borderColor: '#fff',
                    }}>
                        <Text style={{color:'#fff'}}>Dark Mode</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: deviceHeight * 0.3 }}>
                <IntroSliderBtn btnPress={()=>nextButton(3)} text="Next" />
            </View>

        </View>
     
    )
}