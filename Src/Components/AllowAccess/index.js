// import  {Swipeable}  from 'react-native-gesture-handler';
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
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

import { check, PERMISSIONS, RESULTS, request, openSettings } from 'react-native-permissions';
import Contacts from 'react-native-contacts';

import { useTheme } from '@react-navigation/native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const AllowAccess = ({ nextButton, slideNumber }) => {

    const [img, setImg] = useState("")
    const { colors } = useTheme();
    const imgData = [
        {
            img: require('../../Assets/Images/photos.png'),
            title: 'Photos'
        },
        {
            img: require('../../Assets/Images/contacts.png'),
            title: 'Contacts'
        },
        {
            img: require('../../Assets/Images/upp.png'),
            title: 'Upp!'
        }
    ]
    if (true) {
        // request(PERMISSIONS.IOS.CONTACTS)
        //     .then((res) => {
        //         console.log("Permissionn Req Res", res)
        //     }).catch((err) => {
        //         console.log("Permissionn Req Err", err)
        //     })
        // console.log("slidNumber", slideNumber)
        // check(PERMISSIONS.IOS.CONTACTS)
        //     .then((result) => {
        //         switch (result) {
        //             case RESULTS.UNAVAILABLE:
        //                 console.log('This feature is not available (on this device / in this context)');
        //                 break;
        //             case RESULTS.DENIED:
        //                 console.log('The permission has not been requested / is denied but requestable');
        //                 break;
        //             case RESULTS.LIMITED:
        //                 console.log('The permission is limited: some actions are possible');
        //                 break;
        //             case RESULTS.GRANTED:
        //                 console.log('The permission is granted');
        //                 Contacts.getAll().then(contacts => {
        //                    console.log("contact res",contacts)
        //                   }).catch((err)=>{
        //                       console.log("conntact err",err)
        //                   })
        //                 break;
        //             case RESULTS.BLOCKED:
        //                 console.log('The permission is denied and not requestable anymore');
        //                 openSettings().catch(() => console.warn('cannot open settings'));
        //                 break;
        //         }
        //     })
        //     .catch((error) => {
        //         // …
        //     });
        console.log("*************************************")
        request(PERMISSIONS.IOS.PHOTO_LIBRARY)
            .then((res) => {
                console.log("Permissionn Req Res", res)
            }).catch((err) => {
                console.log("Permissionn Req Err", err)
            })

        check(PERMISSIONS.IOS.PHOTO_LIBRARY)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                        console.log('The permission has not been requested / is denied but requestable');
                        break;
                    case RESULTS.LIMITED:
                        console.log('The permission is limited: some actions are possible');
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        Contacts.getAll().then(contacts => {
                            console.log("contact res", contacts)
                        }).catch((err) => {
                            console.log("conntact err", err)
                        })
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        openSettings().catch(() => console.warn('cannot open settings'));
                        break;
                }
            })
            .catch((error) => {
                // …
            });


    }
 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.imgWrapper}>
                    {
                        imgData.map((data, index) => {
                            return <View key={index} style={styles.imgContent}>
                                <View style={[styles.imgCircle, { borderColor: colors.border }]}>
                                    <Image source={data.img} />
                                </View>
                                <Text style={[styles.imgTitle, { color: colors.text }]}>{data.title}</Text>
                            </View>
                        })
                    }
                </View>
                <Text style={{ color: 'gray', textAlign: 'center', marginTop: 50, lineHeight: 20 }}>
                    Please allow Upp! to access your contacts, photos, and send you notifications.
                </Text>
                <View style={[styles.allowBox, { borderColor: colors.border }]}>
                    <Text style={{ color: colors.text, textAlign: 'center', lineHeight: 20 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                    <View style={styles.allowBtnsContainer}>
                        <TouchableOpacity style={[styles.allowBtns, { borderRightColor: 'gray', borderRightWidth: 1 }]}>
                            <Text style={{ color: 'gray' }}>
                                Don't Allow
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.allowBtns]}>
                            <Text style={{ color: '#00E8FC' }}>
                                Allow
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source={{ uri: img }} style={{height:100,width:100}}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '8%',
    }, imgWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }, imgContent: {
        alignItems: 'center',
    }, imgCircle: {
        height: 88,
        width: 88,
        borderRadius: 50,
        borderWidth: 1,
        // borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }, imgTitle: {
        marginTop: 10
    }, allowBox: {
        marginTop: 50,
        paddingHorizontal: '7%',
        paddingTop: '7%',
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        // borderColor: '#fff',
    }, allowBtnsContainer: {
        marginTop: 60,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        height: 50
    }, allowBtns: {
        marginTop: 10,
        height: 30,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }

});


