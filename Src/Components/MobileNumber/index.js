import React, { useState, useRef, useEffect } from 'react';
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
    Platform
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { IntroSliderBtn } from '../Buttons';

import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/Actions/auth-action'
import { useSelector } from 'react-redux'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const MobileFeild = ({ nextButton, setData }) => {
    const state = useSelector(state => state.signInReducer)
    const dispatch = useDispatch()

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const phoneInput = useRef(null);

    const handleNextSlide = () => {


        if (!value) {
            setShowMessage("Phone Number Required")
            console.log("value", value)
        }
        else if (!phoneInput.current?.isValidNumber(value)) {
            setShowMessage("Phone Number Is Not Valid");

        }
        else if (value && phoneInput.current?.isValidNumber(value)) {
            console.log("mustufa ki khuwahish pr");

            dispatch(signIn({ phone: formattedValue }))
                .then((res) => {
                    console.log("Responnce", res.type)
                    if (res.type == "signInSuccess") {
                        setShowMessage(false);
                        // setCountryCode(phoneInput.current?.getCountryCode() || '');
                        setData(formattedValue)
                        nextButton(1)
                    }
                }).catch((err) => {
                    console.log("MobileNumber Error", err)
                })
        }

    }

    // console.log("ReducerState ", state)
    console.warn(deviceHeight)

    // useEffect(() => {

    //     if (state && Object.keys(state).length !== 0 && state.loading == false) {
    //         console.log("useeefect", state.loading, state.data.data.status)
    //         if (state.loading == false && state.data.data.status == "200") { 
    //             setShowMessage(false);
    //             setCountryCode(phoneInput.current?.getCountryCode() || '');
    //             setData(formattedValue)
    //             nextButton(1)
    //         }
    //     }
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [state])
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={{
                flex: 1,
                // marginTop:deviceHeight * 0.05,   
                alignItems: 'center',
                // backgroundColor:'red'
            }}>
                <Text style={{ color: '#fff', fontSize: 16, marginTop: deviceHeight * 0.07 }}>Please Enter Your Phone Number</Text>
                <Image style={{ marginTop: deviceHeight * 0.05 }} source={require('../../Assets/Images/thunder.png')} />
                <PhoneInput
                    ref={phoneInput}
                    placeholder="Number"
                    placeholderTextColor={"#fff"}
                    keyboardType={"phone-pad"}
                    defaultCode="US"
                    layout="first"
                    onChangeText={(text) => {
                        setShowMessage(false)
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    disableArrowIcon={true}
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#fff', borderRadius: 30, height: 50, alignItems: 'center', justifyContent: 'center', marginTop: deviceHeight * 0.05 }}
                    textContainerStyle={{ backgroundColor: 'transparent', paddingVertical: 0, color: '#fff' }}
                    textInputStyle={{ color: '#fff' }}
                    codeTextStyle={{ color: '#fff' }}
                    flagButtonStyle={{ height: 35 }}
                    countryPickerButtonStyle={{ borderRightWidth: 1, borderColor: '#fff', marginLeft: 10 }}

                />
                <Text style={{ color: 'red', marginTop: 10 }}>{showMessage ? showMessage : null}</Text>
                {/* <Text style={{ color: 'white' }}>value : {value}</Text>
            <Text style={{ color: 'white' }}>formated value : {formattedValue}</Text>
            <Text style={{ color: 'white' }}>valid : {valid ? "true" : "false"}</Text>
            <Text style={{ color: 'white' }}>contry code : {countryCode}</Text> */}
                <View style={{ marginTop: deviceHeight * 0.16 }}>
                    <IntroSliderBtn btnPress={handleNextSlide} text="Next" disabled={false} />
                </View>


            </View>
        </KeyboardAvoidingView>
    )
}