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
    Switch
} from 'react-native';
import { MusicList } from '../../Components/MusicList';
import { ImageList } from '../../Components/ImageList';
import { AlarmClock } from '../../Components/AlarmClock'
import { Loading } from '../../Components/Loading'
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import songService from '../../Services/songService'
import alarmService from '../../Services/alarmService'
import CameraRoll from "@react-native-community/cameraroll";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const AddAlarmScreen = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState(0);
    const [songData, setSongData] = useState([]);
    const [imgData, setImgData] = useState([]);
    const [selectedSong, setSelectedSong] = useState("");
    const [alarmTime, setAlarmTime] = useState(new Date());
    const [selectedImg, setSelectedImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { colors } = useTheme();
    const tabMenu = [
        {
            tabTitle: "Set Time",
        },
        {
            tabTitle: "Select Music",
        },
        {
            tabTitle: "Select Image",
        }
    ]
    const getAllSongs = () => {
        songService.getSongs()
            .then((res) => {
                console.log("sog ress", res.data.ringtone)
                setSongData(res.data.ringtone)
            }).catch((err) => {
                console.log("sog err", err)
            })
    }
    const getAllImages = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                console.log("bla bla", r.edges);
                setImgData(r.edges)
            })
            .catch((err) => {
                //Error Loading Images
            });
    };
    useEffect(() => {
        getAllSongs();
        getAllImages();

        //   return () => {
        //     second
        //   }
    }, []);


    console.log('musicData=====>', selectedSong)
    console.log('Time=====>', alarmTime)
    console.log('ImageData=====>', selectedImg)

    const handleSetAlarm = () => {

        setLoading(true);

        const formdata = new FormData();
        let imgName = selectedImg?.node?.image?.filename
        let imgUri = selectedImg?.node?.image?.uri
        let imgType = imgName?.split('.')?.pop();
        if (selectedSong && alarmTime && selectedImg) {
            setError("");
            formdata.append("file", {
                uri: imgUri,
                type: imgType,
                name: imgName,
            });
            formdata.append("time", alarmTime.toString())
            formdata.append("ringtone", selectedSong.ringtone)

            console.log(imgName, imgUri, imgType);
            alarmService.setAlarm(formdata)
                .then((res) => {
                    console.log("Alaerm sset res", res);
                    setLoading(false)
                    navigation.push('tabs');
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            setError("Music or Image can not be empty")
            setLoading(false);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            {loading ? <Loading text={"Please Wait ..."} /> : null}
            {error ? <Text
                style={{ color: 'red', textAlign: 'center', position: 'absolute', left: '25,he%', top: '10%', fontWeight: 'bold', maxWidth: deviceWidth / 2, height: 35, textTransform: 'capitalize' }}
            >
                {error}
            </Text> : null}
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../Assets/Images/backArrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("setting")}>
                    <Image source={require('../../Assets/Images/settings.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#00E8FC", marginLeft: 10 }}>My Alarm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSetAlarm}>
                    <Text style={{ fontSize: 18, color: "#FF01EC" }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                borderTopWidth: 1,
                borderColor: 'gray',
                borderBottomWidth: 1,
                paddingHorizontal: '2%',
                flexDirection: 'row',
                marginTop: 10
            }}>
                {tabMenu.map((data, index) => {
                    return <TouchableOpacity key={index} style={[styles.tabMenu, activeTab == index ? styles.activeTab : null]} onPress={() => setActiveTab(index)}>
                        <Text style={{ color: colors.text }}>{data.tabTitle}</Text>
                    </TouchableOpacity>
                })}

            </View>
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Image source={require('../../Assets/Images/previousArrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../Assets/Images/nextArrow.png')} />
                </TouchableOpacity>
            </View>
            {activeTab == 0 ?
                <AlarmClock style={{ display: activeTab == 0 ? 'block' : 'none' }} setTime={(val) => setAlarmTime(val)} alarmTime={alarmTime} />
                :
                activeTab == 1 ?
                    <MusicList heading={true} recommend={true} data={songData} selectSong={(val) => setSelectedSong(val)} selectedSong={selectedSong} />
                    :
                    <ImageList image={true} data={imgData} setImg={(val) => setSelectedImg(val)} img={selectedImg} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: 'transparent'
    }, activeTab: {
        borderColor: 'aqua'
    }
});

