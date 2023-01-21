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
    Switch
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MusicList } from '../../Components/MusicList';
import { ImageList } from '../../Components/ImageList';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const SettingScreen = ({navigation}) => {

    const { colors } = useTheme();
    const settings = [
        {
            title: "Snooze On/Off",
            set:true
        },
        {
            title: "Alarm with Vibration",
            set:false
        },
        {
            title: "Push Notification",
            set:true
        },
        {
            title: "Upp! Overwrite Existing Media?",
            set:false
        },
        {
            title: "Push Gentle Wakeup?",
            set:true
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require('../../Assets/Images/backArrow.png')} />
                </TouchableOpacity>

            </View>
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: colors.text }}>Settings</Text>
                    <Image style={{ height: 18, width: 18, marginLeft: 5 }} source={require('../../Assets/Images/settings.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: colors.text }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderTopColor: 'gray', borderTopWidth: 1, marginTop: 10 }}></View>
            {settings.map((data, index) => {
                 return  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, alignItems: 'center', paddingHorizontal: '8%' }}>
                 <Text style={{ fontSize: 16, color: colors.text }}>{data.title}</Text>
                    <Switch
                        trackColor={{ false: "gray", true: "#E100D2" }}
                        // thumbColor={isEnabled?"#fff":"#000"}
                        ios_backgroundColor="#110023"
                        // onValueChange={()=>setIsEnabled({...isEnabled,capatcha:!isEnabled.capatcha})}
                        value={data.set}
                    />
                </View>
            })}
            <TouchableOpacity 
            onPress={()=>navigation.navigate("editprofile")}
            style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, alignItems: 'center', paddingHorizontal: '8%' }}
            >
                <Text style={{ fontSize: 16, color: colors.text }}>Edit  Profile</Text>
      
            </TouchableOpacity>
        </SafeAreaView>
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

