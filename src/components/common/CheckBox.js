import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckBox = props => {
    const { checkBox, checkBox__outerBorder, checkBox__innerBorder, checkBox__text } = styles;

    return (
        <View style={checkBox}>
            <TouchableOpacity>
                <View style={checkBox__outerBorder}>
                    <View style={checkBox__innerBorder} />
                </View>
            </TouchableOpacity>
            <Text style={checkBox__text}>Running</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    checkBox:{
        flexDirection: "row",
        alignItems: "center"
    },
    checkBox__outerBorder:{
        height: 27,
        width: 27,
        borderWidth: 2,
        borderColor: "#34cbed",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    checkBox__innerBorder:{
        height: 15,
        width: 15,
        borderRadius: 50,
        backgroundColor: "#34cbed"
    },
    checkBox__text:{
        fontSize: 15,
        marginLeft: 3
    }
});

export default CheckBox;