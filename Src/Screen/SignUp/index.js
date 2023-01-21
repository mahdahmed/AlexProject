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

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const SignUpScreen = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#000' }}>
            <ImageBackground resizeMode='contain' style={styles.bgContainer} source={require('../../Assets/Images/bg.png')}>
                <View style={styles.contentContainer}>
                    <Image source={require('../../Assets/Images/Clock.png')} />
                    <Text style={styles.wlcmTxt}>Welcome To Upp!</Text>
                    <Text style={styles.descTxt}>Your alarm clock experience just became way more exciting! Please complete a few simple steps before we get started.</Text>
                    <TouchableOpacity style={styles.signupBtn} onPress={()=>navigation.navigate("intro")}>
                        <Text style={{ color: '#fff' }}>
                            Sign-Up Now
                        </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,

    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        paddingHorizontal: '8%'
    }, wlcmTxt: {
        marginTop: 20,
        color: '#fff',
        fontSize: 20
    }, descTxt: {
        marginTop: 20,
        color: '#fff',
        textAlign: 'center'
    }, signupBtn: {
        height:40,
        width:'70%',
        marginTop: 40,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
});


