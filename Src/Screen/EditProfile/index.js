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
    KeyboardAvoidingView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import userService from '../../Services/userService'
import { Loading } from '../../Components/Loading'
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const EditProfileScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [phoneNum, setphoneNum] = useState('')
    const [about, setAbout] = useState('')
    const [error, setError] = useState('')

    const getProfile = () => {
        userService.getUserProfile()
            .then((res) => {
                console.log(res.data.profile[0]);
                setName(res.data.profile[0].name)
                setphoneNum(res.data.profile[0].phone)
                setAbout(res.data.profile[0].about)
            }).catch((err) => {
                console.log(err);
            })

    }
    const saveButton = () => {
        if(name && about){
            userService.updateProfile({name:name,about:about})
            .then((res)=>{
                console.log(res);
                getProfile()
            }).catch((err)=>{
                console.log(err);
            })
        }
        if (name === '') {
            setError("Name required")
        }
        else if (about === "") {
            setError("About required")

        }
        else {
            setError("")

        }
    }
    useEffect(() => {
        getProfile()

        //   return () => {
        //     second
        //   }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={50}
                style={{ flex: 1 }}
            >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../Assets/Images/backArrow.png')} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, color: colors.text }}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveButton}>
                            <Text style={{ fontSize: 18, color: colors.text }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <View style={{ borderColor: colors.text, borderWidth: 1, padding: 30, borderRadius: 100 }}>
                            <Image style={{ height: 90, width: 90 }} source={require('../../Assets/Images/contacts.png')} />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: '8%' }}>
                        <Text style={{ fontSize: 18, color: colors.text, marginTop: 10 }}>Name</Text>
                        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
                            <TextInput
                                style={{ fontSize: 18, color: colors.text,width:'95%' }}
                                placeholder="Enter Name"
                                placeholderTextColor={"gray"}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />

                        </View>
                        {
                            error === "Name required" && (

                                <View >
                                    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                                </View>
                            )
                        }
                    </View>
                    <View style={{ paddingHorizontal: '8%' }}>
                        <Text style={{ fontSize: 18, color: colors.text, marginTop: 10 }}>Phone Number</Text>
                        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
                            <TextInput
                               style={{ fontSize: 18, color: colors.text,width:'95%' }}
                                placeholder="Enter Phone Number"
                                placeholderTextColor={"gray"}
                                value={phoneNum}
                                editable={false}
                                // onChangeText={(text) => { setphoneNum(text); setError('') }}
                            />

                        </View>
                        {
                            error === "Phone required" && (
                                <View >
                                    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                                </View>
                            )
                        }
                    </View>

                    <View style={{ paddingHorizontal: '8%' }}>
                        <Text style={{ fontSize: 18, color: colors.text, marginTop: 10 }}>About</Text>
                        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
                            <TextInput
                                style={{ fontSize: 18, color: colors.text,width:'95%' }}
                                placeholder="About"
                                placeholderTextColor={"gray"}
                                onChangeText={(text) => setAbout(text)}
                                value={about}
                            />

                        </View>
                        {
                            error === "About required" && (
                                <View >
                                    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                                </View>
                            )
                        }
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabMenu: {
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 20
    }, activeTab: {
        borderColor: 'aqua'
    }, inputContainer: {
        flexDirection: 'row',
        // borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        paddingLeft: 20,
        paddingVertical: 10
    }
});

