import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({size}) => {
    const {spinner__area} = styles;
    return (
        <View style={spinner__area}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = StyleSheet.create({
    spinner__area:{
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
    }
});

export default Spinner;