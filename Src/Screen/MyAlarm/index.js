import React, { useState, useEffect } from 'react';
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
    Alert
} from 'react-native';
import { Loading } from '../../Components/Loading'
import { useTheme } from '@react-navigation/native';
import alarmService from '../../Services/alarmService'
import Moment from 'moment';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;





export const MyAlarmScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [alarmData, setAlarmData] = useState([])
    const [loading, setLoading] = useState(false)

    const createTwoButtonAlert = (id) => {
        Alert.alert(
            "Delete Alarm",
            "Are you want to delete this?",
            [
                {
                    text: "Cancel",
                    //   onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteAlarm(id) }
            ]
        );
    }
    //     let str = "12345.00";
    // str = str.slice(0, -2); 
    // console.log(str);
    // console.log("----> time", Date("09:44 PM"), new Date(alarmTime),typeof alarmTime,alarmTime);
    // const time = Moment(new Date("Wed Jun 15 2022 2:44:25 GMT+0500 (Pakistan Standard Time)")).format('hh:mm A');
    // console.log("time", typeof time, time.substr(5));
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ borderColor: 'gray', borderWidth: 2, borderRadius: 14, marginTop: 10, paddingHorizontal: 15, paddingBottom: 10 }} onLongPress={() => createTwoButtonAlert(item.alarm_id)}>
                {loading ? <Loading /> : null}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 62, color: colors.text }}>{Moment(new Date(item.alarm_time)).format('hh:mm A').substring(0, 5)}</Text>
                    <Text style={{ fontSize: 20, color: 'gray', marginHorizontal: 10 }}>{Moment(new Date(item.alarm_time)).format('hh:mm A').substr(-2)}</Text>
                    <Switch
                        trackColor={{ false: "gray", true: "#E100D2" }}
                        // thumbColor={isEnabled?"#fff":"#000"}
                        ios_backgroundColor="#110023"
                        // onValueChange={()=>setIsEnabled({...isEnabled,capatcha:!isEnabled.capatcha})}
                        value={item.status === "true" ? true : false}
                        onValueChange={()=>{upadateAlarm({alarm_id:item.alarm_id,status:item.status === "true" ? "false" : "true"})}}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#07E1FF' }}>{item?.song}</Text>
                    {/* <Text style={{ color: '#07E1FF', position: 'absolute', left: '35%' }}>Click to edit</Text> */}
                </View>

            </TouchableOpacity>

        );
    };
    const getAllAlarm = () => {
        setLoading(true)
        alarmService.getAlarm()
            .then((res) => {
                console.log("------- >Get Alarm rES", res.data.data)
                setAlarmData(res.data.data)
                setLoading(false)
            }).catch((err) => {
                console.log("------- >Get Alarm err", err)
            })
    }
    const upadateAlarm=(data)=>{
        console.log(data);
        setLoading(true)
        alarmService.setAlarm_On_Off(data)
        .then((res)=>{
            console.log(res);
            getAllAlarm();
        }).catch((err)=>{
            console.log("------- >Upadate Alarm err", err)
        })
    }
    const deleteAlarm = (id) => {
        setLoading(true)
        alarmService.deleteAlarm(id)
            .then((res) => {
                console.log("------- >Delete Alarm rES", res)
                getAllAlarm();
                // setLoading(false)
            }).catch((err) => {
                console.log("------- >Delete Alarm err", err)
            })
    }
    useEffect(() => {
        getAllAlarm()

        //   return () => {
        //     second
        //   }
    }, [])
    //   console.log("----> time",Date("09:44 PM"));
    //   const time = Moment(new Date("Wed Jun 15 2022 21:44:25 GMT+0500 (Pakistan Standard Time)")).format('hh:mm A');
    //   console.log("time",time);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            {loading?<Loading text={'Please Wait'}/>:null}
            <View style={{ flex: 1, paddingHorizontal: '8%' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, paddingBottom: 10 }}>
                    <Text style={{ color: colors.text, fontSize: 16, marginTop: 20 }}>My Alarm</Text>
                    <View style={{ alignItems: 'center', marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', borderRightColor: 'gray', borderRightWidth: 0.5, marginRight: 5, paddingRight: 5 }}>
                                <Text style={{ fontSize: 22, color: colors.text, paddingHorizontal: 2 }}>07</Text>
                                <Text style={{ color: 'gray' }}>hr</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 22, color: colors.text, paddingHorizontal: 2 }}>36</Text>
                                <Text style={{ color: 'gray' }}>mins</Text>
                            </View>
                        </View>
                        <Text style={{ color: colors.text, fontSize: 12, marginTop: 5 }}>Until Next Alarm</Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: 20, position: 'absolute', right: 10 }} onPress={() => navigation.navigate("addalarm")}>
                        <Image source={require('../../Assets/Images/plus.png')} />
                    </TouchableOpacity>
                </View>
                <View style={OS === 'ios' ? { flex: 0.92 } : { flex: 1 }}>
                    <FlatList
                        data={alarmData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.alarm_id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // bgContainer: {
    //     flex: 1,

    // },
    // contentContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     backgroundColor: 'rgba(0,0,0,0.5)',
    //     justifyContent: 'center',
    //     paddingHorizontal: '8%'
    // }, wlcmTxt: {
    //     marginTop: 20,
    //     color: '#fff',
    //     fontSize: 20
    // }, descTxt: {
    //     marginTop: 20,
    //     color: '#fff',
    //     textAlign: 'center'
    // }, 
});
