import React from 'react';
import {View, Text} from 'react-native';

const Spinner = () => {
    const {spinner__area, spinner__text} = styles;
    return (
        <View style={spinner__area}>
            <Text style={spinner__text}>Loading Deals...</Text>
        </View>
    )
}

const styles = {
    spinner__area:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    spinner__text:{
        fontSize: 30
    }
}

export default Spinner;