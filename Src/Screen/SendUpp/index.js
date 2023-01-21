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
    Switch
} from 'react-native';
import { MusicList } from '../../Components/MusicList';
import { ImageList } from '../../Components/ImageList';
import { ContactList } from '../../Components/ContactList';
import { useTheme } from '@react-navigation/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const SendUppScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(0)
    const [showImageList, setShowImageList] = useState(false)

    const { colors } = useTheme();
    const tabMenu = [
        {
            tabTitle: "Send A Pic",
        },
        {
            tabTitle: "Send Music",
        },
        {
            tabTitle: "My Contacts",
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => setShowImageList(false)}>
                    <Image source={require('../../Assets/Images/backArrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("setting")}>
                    <Image source={require('../../Assets/Images/settings.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#00E8FC", marginLeft: 10 }}>Send An Upp</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color:'#FF01EC' }}>Send <Text style={{color:'#FF01EC',fontSize:20,fontWeight:'500'}}>&gt;</Text></Text>
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
            {/* <View style={{ paddingHorizontal: '8%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Image source={require('../../Assets/Images/previousArrow.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../Assets/Images/nextArrow.png')} />
                </TouchableOpacity>
            </View> */}
            {activeTab == 0 ?
                showImageList ?
                <ImageList nav={true}/>  : <Selfie hide={() => setShowImageList(true)} />

                :
                activeTab == 1 ?
                    <MusicList heading={false} recommend={false} />
                    :
                    <ContactList />
                // <ImageList/>   
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
        borderColor:'transparent'
    }, activeTab: {
        borderColor: 'aqua'
    }
});

const Selfie = ({ hide }) => {
    return (
        <ImageBackground
            style={{
                //  alignItems: 'center',
                 justifyContent: 'space-between',
                flex: 1,
                backgroundColor: '#483141',
                overflow: 'hidden',

            }}
            source={require('../../Assets/Images/selfie.png')}>
           <View style={{
               alignItems:'center',
               backgroundColor:'rgba(0,0,0,0.1)',
               paddingVertical:20
               
           }}>
               <Image source={require('../../Assets/Images/searchGroup.png')}/>
           </View>
           <View style={{flexDirection:'row',backgroundColor:'rgba(0,0,0,0.1)',justifyContent:'space-evenly',alignItems:'center'}}>
           <TouchableOpacity onPress={hide}><Image source={require('../../Assets/Images/whiteUpp.png')}/></TouchableOpacity>
           <Image source={require('../../Assets/Images/captureBtn.png')}/>
           <Image source={require('../../Assets/Images/camera.png')}/>
           </View>
           
        </ImageBackground>

    )
}




///////
