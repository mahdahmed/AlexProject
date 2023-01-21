

import React, { useState, useRef } from 'react';
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
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { MobileFeild } from '../../Components/MobileNumber';
import { CodeVerification } from '../../Components/CodeVerification';
import { ThemeSelect } from '../../Components/ThemeSelect';
import { AllowAccess } from '../../Components/AllowAccess';
import { UploadPhoto } from '../../Components/UploadPhoto';
import { useTheme } from '@react-navigation/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;




export const IntroScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const sliderRef = useRef(null)
const [sharedData, setSharedData] = useState(null);
const [slideIndex, setSlideIndex] = useState(null);
    // const isDarkMode = useColorScheme() === 'dark';
    _renderItem = ({ item, index, Dimensions }) => {
        return (
            <View style={{ flex: 1, backgroundColor: '' }}>
                {item.component}
                {/* {console.log(item)} */}
            </View>
        );
    }

    const slides = [
        {
            key: 'one',
            component: <MobileFeild nextButton={(value) => sliderRef.current.goToSlide(value)} setData={(val)=>setSharedData(val)}/>
        },
        {
            key: 'two',
            component: <CodeVerification nextButton={(value) => sliderRef.current.goToSlide(value)} data={sharedData}/>
        },
        {
            key: 'three',
            component: <ThemeSelect nextButton={(value) => sliderRef.current.goToSlide(value)} />
        },
        {
            key: 'four',
            component: <AllowAccess nextButton={(value) => sliderRef.current.goToSlide(value)} 
            slideNumber={slideIndex}
            />
        },
        {
            key: 'five',
            component: <UploadPhoto nextButton={(value) => sliderRef.current.goToSlide(value)} navigation={navigation}/>
        }
    ];
    _onDone = () => {
        navigation.navigate("tabs")
    }
    return (
    
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background}}>
            <AppIntroSlider
                ref={sliderRef}
                renderItem={_renderItem}
                onSlideChange={(index, lastindex) => { setSlideIndex({curInndex:index,prevIndex:lastindex})}}
                data={slides}
                activeDotStyle={{ backgroundColor: colors.primary, width: 40, height: 4 }}
                dotStyle={{ backgroundColor: colors.primary === '#000' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)', width: 40, height: 4 }}
                showNextButton={false}
                showDoneButton={false}
                dotClickEnabled={false}
                //  scrollEnabled={false}

                // renderNextButton={() => {
                //     return <View style={{
                //         position: 'absolute',
                //         top: -90,
                //         left: (-deviceWidth / 2) - 30,
                //         flexDirection: 'row',
                //         justifyContent: 'center',
                //         alignItems: 'center',
                //         height: 40,
                //         paddingHorizontal: 20,
                //         borderWidth: 1,
                //         borderColor: colors.border,
                //         borderRadius: 20
                //     }}

                //     >
                //         <Text style={{ color: colors.text }}>Next</Text>
                //         <Image style={{ marginLeft: 10 }} source={require('../../Assets/Images/Arrow.png')} />
                //     </View>
                // }}


                renderDoneButton={() => {
                    return <View style={{
                        position: 'absolute',
                        top: -90,
                        left: (-deviceWidth / 2) - 30,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        paddingHorizontal: 20,
                        borderWidth: 1,
                        borderColor: colors.border,
                        borderRadius: 20
                    }}

                    >
                        <Text style={{ color: colors.text }}>Done</Text>
                        <Image style={{ marginLeft: 10 }} source={require('../../Assets/Images/Arrow.png')} />
                    </View>
                }}
                onDone={_onDone}
            />
            {console.log("Slider Ref", sliderRef.current)}
        </SafeAreaView>
     
    );
};

const styles = StyleSheet.create({
    // themebackground:{
    //     backgroundColor:state=='dark'?'#000':'#fff'
    // },
    // themeText:{
    //     color:state=='dark'?'#fff':'#000'
    // }
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


