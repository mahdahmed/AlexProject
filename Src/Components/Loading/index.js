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
    Platform,
    ActivityIndicator
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const Loading = ({ text }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.loadingCotainer}>
            <ActivityIndicator size={'large'} color={'#FF01EC'} />
            <Text style={{ color: "#fff",marginTop:20 }}> {text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingCotainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight,
        width: deviceWidth,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
});


