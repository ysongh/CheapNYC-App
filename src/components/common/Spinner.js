import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    const {spinner__area} = styles;
    return (
        <View style={spinner__area}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinner__area:{
        marginTop: 150,
        alignItems: 'center',
        height: '100%'
    }
}

export default Spinner;