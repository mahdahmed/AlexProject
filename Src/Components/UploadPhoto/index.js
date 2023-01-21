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
import { IntroSliderBtn } from '../Buttons'
import {Loading} from '../Loading'
import { useTheme } from '@react-navigation/native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import userService from "../../Services/userService";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const UploadPhoto = ({navigation}) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const { colors } = useTheme();

    const handleGallery = async () => {
        const formdata = new FormData();

        launchImageLibrary("mixed").then((response) => {
            console.log("image res", response.assets[0])
            // console.log("Form data",formdata)
            setLoading(true)

            formdata.append("image_url", {
                uri: response.assets[0].uri,
                type: response.assets[0].type,
                name: response.assets[0].fileName,
            })

            userService.uploadUserImage(formdata)

                .then((res) => {
                    console.log("photoUpload", res)
                    setImage(response.assets[0])
                    setLoading(false)
                }).catch((err) => {
                    console.log("uploaderroe", err)
                    setLoading(false)
                })

        }).catch((err) => {
            console.log("image err", err)
        })
    }
    const handleNextSlide = () => {
        // if (true) {

        //     userService.updateProfile({ name: name })
        //         .then((res) => {
        //             console.log("name update", res)
                    navigation.navigate("tabs")
                // })
                // .catch((err) => {
                //     console.log("name err", err)
                // })


        // } 
        // else {
        //     // setShowMessage("Verification Code Required")
        // }

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? 
            // <View style={{ position: 'absolute', height: deviceHeight, width: deviceWidth, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 999, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text style={{ color: '#fff' }}>Uploading Image Please wait...</Text>
            // </View> 
            <Loading text={'Uploading Image Please wait...'}/>
            : null}
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ color: colors.text }}>
                        Upload Your
                    </Text>
                    <Text style={{ color: '#FF01EC', fontSize: 18, marginLeft: 2 }}>
                        Best Photo
                    </Text>
                </View>
                <TouchableOpacity onPress={handleGallery} style={{ marginTop: 50, height: deviceHeight * 0.3, width: '80%', borderColor: colors.border, borderWidth: 1, borderRadius: 25, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                    {image ?
                        // console.log(image.uri)
                        <Image source={{ uri: image.uri }} style={{ height: '100%', width: '100%' }} />
                        : <Image source={require('../../Assets/Images/plusCircle.png')} />
                    }
                </TouchableOpacity>
                <View style={{ borderColor: colors.border, borderWidth: 1, borderRadius: 40, paddingLeft: 10, marginTop: 100, width: '70%' }}>
                    <TextInput
                        style={[{ color: colors.text }, OS === 'ios' ? { paddingVertical: 10 } : {}]}
                        placeholder="Please Enter Your Name"
                        placeholderTextColor={"gray"}
                        onChangeText={(val) => setName(val)}
                    >
                    </TextInput>

                </View>
                <View style={{ marginTop: deviceHeight * 0.13 }}>
                    <IntroSliderBtn btnPress={handleNextSlide} text="Done" />
                </View>
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
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }, imgTitle: {
        color: '#fff',
        marginTop: 10
    }, allowBox: {
        marginTop: 50,
        paddingHorizontal: '7%',
        paddingTop: '7%',
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
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


