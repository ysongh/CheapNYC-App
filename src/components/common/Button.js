import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ buttonStyle, textStyle, value, onPress }) => {
    const { default__buttonText } = styles;

    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle || default__buttonText}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    default__buttonText:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Button;