import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
    const {header, header__text} = styles;
    return (
        <View style={header}>
            <Text style={header__text}>CheapNY</Text>
        </View>
    )
}

const styles = {
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        height: 90,
        backgroundColor: '#f7e6ea',
        marginBotton: 5,
        shadowColor: '#380814',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9
    },
    header__text:{
        fontSize: 30
    }
}

export default Header;