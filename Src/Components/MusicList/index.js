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
    Switch
} from 'react-native';
import { useTheme } from '@react-navigation/native';



const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const MusicList = ({ heading, recommend, data,selectSong,selectedSong }) => {
    const { colors } = useTheme();
 
    console.log("song list", data)
      
    const renderItem = ({ item }) => {

        return (

            <View style={{ borderColor: 'gray', borderBottomWidth: 1, borderRadius: 14, marginTop: 10, paddingHorizontal: 25, paddingBottom: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[{ color: colors.text, width: deviceWidth * 0.41},selectedSong.id == item.id ? {color:"#E100D2"}:null]} >"{item.name}"</Text>
                    <Text style={{ color: 'gray' }}>Artists</Text>
                    <TouchableOpacity onPress={() => {selectSong(item)}}>
                        <Image source={require('../../Assets/Images/plusCircleWhite.png')} />
                    </TouchableOpacity>
                </View>
            </View>

        );
    };




    return (
        <View style={{
            paddingHorizontal: '10%',
            marginTop: 20
        }}>

            {heading ? <View style={{ alignItems: 'center' }}>
                <Text style={{ color: colors.text }}>Pick Your Favourite Song</Text>
            </View> : null}
            <View style={[styles.searchContainer, { borderColor: colors.border }]}>
                <TextInput
                    placeholder="Search Artist, Song, Genre"
                    placeholderTextColor={"gray"}
                />
                <Image style={{ position: 'absolute', right: 30 }} source={require('../../Assets/Images/search.png')} />
            </View>
            <View style={{ height: 140, marginTop: 30 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {recommend ? <View style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, color: colors.text }}>Recommended Music?</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Based Off</Text>
                </View>
                <Text style={{ fontSize: 12, color: 'gray', marginTop: 15 }}>Recennt Selection</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ color: colors.text }}>"Song Name"</Text>
                    <Image style={{ marginLeft: 20, height: 12, width: 12 }} source={require('../../Assets/Images/plusCircleWhite.png')} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ color: colors.text }}>"Song Name"</Text>
                    <Image style={{ marginLeft: 20, height: 12, width: 12 }} source={require('../../Assets/Images/plusCircleWhite.png')} />
                </View>
            </View> : null}

        </View>



    )
}
const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 10
    }
});




