import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonWithIcon = ({ icon, value, onPress }) => {
    const { button__group, button__label } = styles;

    return(
        <TouchableOpacity style={button__group} onPress={onPress}>
            <Image source={icon} />
            <Text style={button__label}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button__group:{
        display: "flex",
        alignItems: "center",
    },
    button__label:{
        fontSize: 15
    }
})

export default ButtonWithIcon;