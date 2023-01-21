import React from 'react';
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

 export function IntroSliderBtn({btnPress,text,disabled}) {
  return (
    <TouchableOpacity onPress={btnPress} disabled={disabled}>
    <View style={{
        //  position: 'relative',
        //  top:'70%',
        // left: (-deviceWidth / 2)-30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20
    }}
    >

        <Text style={{ color: '#fff' }}>{text}</Text>
        <Image style={{ marginLeft: 10 }} source={require('../../Assets/Images/Arrow.png')} />
    </View>
</TouchableOpacity>
  )
}

