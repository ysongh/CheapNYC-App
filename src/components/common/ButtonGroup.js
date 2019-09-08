import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonGroup = ({ buttonStyle, textStyle, value1, value2, onPress1, onPress2 }) => {
    const { buttonGroup, buttonGroup__button, default__buttonText } = styles;

    return(
        <View style={buttonGroup}>
            <TouchableOpacity style={buttonStyle || buttonGroup__button} onPress={onPress1}>
                <Text style={textStyle || default__buttonText}>{value1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle || buttonGroup__button} onPress={onPress2}>
                <Text style={textStyle || default__buttonText}>{value2}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonGroup:{
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    buttonGroup__button:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        paddingVertical: 12,
        width: "45%",
        marginVertical: 10
    },
    default__buttonText:{
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default ButtonGroup;