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
import { useTheme } from '@react-navigation/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const ContactList = ({ }) => {
    const { colors } = useTheme();
    const DATA = [
        {
            id: "1",
            heading: 'My Top 3',
            contacts: [
                { name: 'Kaleigh', btn: '' },
                { name: 'Ryan', btn: '' },
                { name: 'Mom', btn: '' },
                { name: 'Songs', btn: '' }
            ]

        },
        {
            id: "2",
            heading: 'My Contacts',
            contacts: [
                { name: 'Adam C', btn: '' },
                { name: 'Brainer Smith', btn: 'Add' },
                { name: 'Ban Queill', btn: '' },
                { name: 'Courneir', btn: 'Add' },
                { name: 'Dlank L', btn: 'Add' },
                { name: 'Ellie', btn: '' },
                { name: 'Erenes', btn: '' }
            ]

        },
        {
            id: "3",
            heading: 'Invite To Upp!',
            contacts: [
                { name: 'Dlank L', btn: 'Invite' },
                { name: 'Ellie', btn: 'Invite' },
                { name: 'Erenes', btn: 'Invite' },
                { name: 'Adam C', btn: 'Invite' },
                { name: 'Brainer Smith', btn: 'Invite' },
                { name: 'Ban Queill', btn: 'Invite' },
                { name: 'Courneir', btn: 'Invite' }
            ]

        },

    ]
    const renderItem = ({ item }) => {

        return (
            <View>
                <Text style={{ fontSize: 16, color: '#00E8FC', marginBottom: 5 }}>{item.heading}</Text>
                {item.contacts.map((data, index) => {
                    return <View style={{ borderColor: 'gray', borderBottomWidth: 1, borderRadius: 14, marginBottom: 10, paddingHorizontal: 25, paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: colors.text }}>{data.name}</Text>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#FF01EC', paddingHorizontal: 20 }}>
                                    {data.btn ? <Text style={{ color: '#fff' }}>{data.btn}</Text> : null}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                })}

            </View>
        );
    };

    return (
        <View style={{
            paddingLeft: '5%',
            paddingRight: '2%',
            marginTop: 20,
            flexDirection: 'row'
        }}>

            <View style={{ flex: 1, height: deviceHeight / 1.5 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ backgroundColor: '',justifyContent:'space-around'}}>
                {AtoZ().map((data, index) => {
                    return <Text style={{ color: 'gray', fontSize: 13 }}>{data}</Text>
                })}
            </View>

        </View>



    )
    function AtoZ() {
        const arr = [];
        for (var k = 65; k < 91; k++) {
            var str = String.fromCharCode(k);
            //print the result in console
            arr.push(str)
        }
        return arr;
    }
}
const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 40
    }
});




