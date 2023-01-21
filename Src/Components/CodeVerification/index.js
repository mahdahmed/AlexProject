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
    Platform
} from 'react-native';
import { IntroSliderBtn } from '../Buttons'

import { useDispatch } from 'react-redux';
import { codeVerification } from '../../Redux/Actions/auth-action'
import { useSelector } from 'react-redux'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const CodeVerification = ({ nextButton, data }) => {

    const state = useSelector(state => state.signInReducer)
    const state1 = useSelector(state => state.codeVerfyReducer)
    const dispatch = useDispatch()
    console.log("signi in sstate", state)
    console.log("code state", state1)
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const ref1pin = useRef();
    const ref2pin = useRef();
    const ref3pin = useRef();
    const ref4pin = useRef();

    const handleNextSlide = () => {
        // console.warn(pin1,pin2,pin3,pin4)
        console.warn(!pin1 && !pin2)
        const otp = pin1.concat(pin2, pin3, pin4)
        console.log("otpcheck", otp)
        if (pin1 && pin2 && pin3 && pin4) {
            dispatch(codeVerification({ JWT: "16|fINshWLzp1Ro1oJ7TYGh20y0QmNzMF9SV3qAbiJ9", OTP: otp }))
                .then((res) => {
                    console.log("Responnce", res.type)
                    if (res.type == "OTPSuccess") {
                        setShowMessage(false);
                        // setCountryCode(phoneInput.current?.getCountryCode() || '');

                        nextButton(2)
                    }
                }).catch((err) => {
                    console.log("Error", err)
                    setShowMessage("OTP Is Not Valid");
                })


        }
        else {
            setShowMessage("Verification Code Required")
        }

    }
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
        //     <KeyboardAvoidingView
        //     keyboardVerticalOffset={keyboardVerticalOffset}
        // //    behavior={Platform.OS === "ios" ? "padding" : "height"}
        // behavior='position'
        //    style={{flex:1}}
        //  >
        <View style={{
            flex: 1,
            // marginTop:30,
            alignItems: 'center',
            // backgroundColor:'white'
        }}>
            <TouchableOpacity onPress={() => nextButton(0)}>
                <Text style={{ color: "white" }}>Back</Text>
            </TouchableOpacity>
            <Text style={{ color: '#fff', marginBottom: deviceHeight * 0.02, marginTop: deviceHeight * 0.04 }}>Verification</Text>
            <Text style={{ color: '#fff', fontSize: 16 }}>We Sent You An SMS Code</Text>
            <Text style={{ color: '#fff', marginTop: deviceHeight * 0.02 }}>On Number {data}</Text>
            <Image style={{ marginTop: deviceHeight * 0.06 }} source={require('../../Assets/Images/thunder.png')} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '70%',
                height: deviceHeight * 0.06,
                marginTop: deviceHeight * 0.04,

            }}>

                <TextInput
                    ref={ref1pin}
                    maxLength={1}
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={(val1) => {
                        setPin1(val1)
                        if (val1 != "") {
                            ref2pin.current.focus()
                        }
                    }}
                    value={pin1}
                />
                <TextInput
                    maxLength={1}
                    ref={ref2pin}
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={(val2) => {
                        setPin2(val2)
                        if (val2 != "") {
                            ref3pin.current.focus()
                        } else if (val2 != pin2) {
                            ref1pin.current.focus()
                        }
                    }}
                    value={pin2}
                />
                <TextInput
                    maxLength={1}
                    ref={ref3pin}
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={(val3) => {
                        setPin3(val3)
                        if (val3 != "") {
                            ref4pin.current.focus()
                        } else if (val3 != pin3) {
                            ref2pin.current.focus()
                        }
                    }}
                    value={pin3} />
                <TextInput
                    maxLength={1}
                    ref={ref4pin}
                    style={styles.textInput}
                    keyboardType="numeric"
                    onChangeText={(val4) => {
                        setPin4(val4)
                        if (val4 != "") {

                        } else if (val4 != pin4) {
                            ref3pin.current.focus()
                        }
                    }}
                    value={pin4} />
            </View>
            <Text style={{ color: 'red', marginTop: 10 }}>{showMessage ? showMessage : null}</Text>
            <Text style={{
                color: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#E100D2',
                borderStyle: 'dashed',
                marginTop: deviceHeight * 0.02
            }}>Code  Not Received ?</Text>
            <View style={{ marginTop: deviceHeight * 0.05 }}>
                <IntroSliderBtn btnPress={handleNextSlide} text="Next" />
            </View>

        </View>
        // {/* </KeyboardAvoidingView> */}
    )
}

const styles = StyleSheet.create({
    textInput: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '20%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 11,
        color: "#fff",
        textAlign: 'center',
        fontSize: deviceHeight * 0.03
    }

});