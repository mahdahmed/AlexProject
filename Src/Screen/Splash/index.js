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
// import LinearGradient from 'react-native-linear-gradient';
// import FeatherIcons from 'react-native-vector-icons/Feather';
// import AntDesignIcons from 'react-native-vector-icons/AntDesign';
// import { DeleteModal } from '../../Components/DeleteModal'
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const SplashScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000'}}>
            <ImageBackground resizeMode='contain' style={styles.bgContainer} source={require('../../Assets/Images/bg.png')}>
            <Image source={require('../../Assets/Images/Clock.png')}/>
            </ImageBackground>
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   bgContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   }
});


