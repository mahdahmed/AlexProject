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
    Platform,
    Switch,
    Button
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import { useTheme } from '@react-navigation/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;

export const AlarmClock = ({setTime,alarmTime}) => {

  
    const { colors } = useTheme();
  

   
    // console.log("----> time", Date("09:44 PM"), new Date(alarmTime),typeof alarmTime,alarmTime);
    //   const time = Moment(new Date("Wed Jun 15 2022 21:44:25 GMT+0500 (Pakistan Standard Time)")).format('hh:mm A');
    //   console.log("time",alarmTime, typeof time);
    return (
        <View style={{ flex: 1 }}>
            <DateTimePicker
                style={{flex:1,backgroundColor:''}}
                display="spinner"
                value={alarmTime}
                mode={'time'}
                onChange={(event, selectedDate)=>setTime(selectedDate)}
                textColor={colors.text}
                
            /> 

        </View>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 20
    }, activeTab: {
        borderColor: 'aqua'
    }
});

