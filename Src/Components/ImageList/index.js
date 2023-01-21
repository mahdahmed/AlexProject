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
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const OS = Platform.OS;
export const ImageList = ({ image, nav, data, setImg, img }) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    // console.warn(deviceHeight)
    const DATA = [
        {
            id: "1",


        },
        {
            id: "2"

        },
        {
            id: "3"

        },
        {
            id: "4"

        },
        {
            id: "5"
        }
    ]
    console.log("imge k andr", data);
    console.log("andr", img);
    const renderItem = ({ item }) => {

        return (

            <View style={{ flexDirection: 'row' }}>
                <Image style={{}} source={require('../../Assets/Images/uppFrame.png')} />
                <Image style={{}} source={require('../../Assets/Images/uppFrame.png')} />
                <Image style={{}} source={require('../../Assets/Images/uppFrame.png')} />
            </View>

        );
    };

    return (
        <>
            <View style={{
                paddingHorizontal: '10%',
                marginTop: 20
            }}>

                <View style={[styles.searchContainer, { borderColor: colors.border }]}>
                    <TextInput
                        placeholder="Search An Image"
                        placeholderTextColor={"gray"}
                    />
                    <Image style={{ position: 'absolute', right: 40 }} source={require('../../Assets/Images/search.png')} />
                </View>
                {image ?
                    <View style={{ marginTop: 30, paddingLeft: 15 }}>
                        <Text style={{ color: colors.text }}>My Photos</Text>
                        <Image style={{ marginTop: 10 }} source={require('../../Assets/Images/uppFrame.png')} />
                    </View> : null}
            </View>
            <View style={{ flex: 1, marginTop: 30 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        {nav == true ?
                            <TouchableOpacity onPress={() => navigation.navigate('selfie')}>
                                <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img1.png')} />
                            </TouchableOpacity>
                            :
                         null   // <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img1.png')} />
                        }
                        {data?.map((data, index) => {
                            return (
                                <TouchableOpacity key={index} style={{ width: deviceWidth * 0.33, height: deviceHeight * 0.16 }} onPress={()=>setImg(data)}>
                                  {img?.node?.image?.uri==data.node.image.uri? <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 99,justifyContent:'center',alignItems:'center' }}>
                                        <Text style={{ color: 'white' }}>Selected</Text>
                                    </View>:null}
                                    <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={{ uri: data.node.image.uri }} />
                                </TouchableOpacity>
                            )
                        })}
                        {/* <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img2.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img3.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img4.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img5.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img6.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img7.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img8.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img1.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img2.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img3.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img4.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img5.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img6.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img7.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img8.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img1.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img2.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img3.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img4.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img5.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img6.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img7.png')} />
                        <Image style={{ marginTop: 5, width: deviceWidth * 0.32, height: deviceHeight * 0.15 }} source={require('../../Assets/Images/img8.png')} />*/}
                    </View>
                </ScrollView>
                {/* <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                   
                /> */}
            </View>
            {/* <View style={styles.container}> */}

            {/* <FlatList
            data={DATA}
            renderItem={({item}) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{flex: 1}}
                  onPress={() => {
                    showModalFunction(true, item.src);
                  }}>
                      <Text>hhh</Text>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: item.src,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          /> */}
            {/* </View> */}
        </>

    )
}
const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 10
    }, container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    titleStyle: {
        padding: 16,
        fontSize: 20,
        color: 'white',
        backgroundColor: 'green',
    },
    //   imageContainerStyle: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     margin: 1,
    //   },
    //   imageStyle: {
    //     height: 120,
    //     width: '100%',
    //   },
});




