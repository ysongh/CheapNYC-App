import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckBox = ({ value, isCheck, onPress }) => {
    const { checkBox, checkBox__outerBorder, checkBox__innerBorderChecked, checkBox__innerBorderNotChecked, checkBox__text } = styles;

    return (
        <View style={checkBox}>
            <TouchableOpacity onPress={onPress}>
                <View style={checkBox__outerBorder}>
                    <View style={isCheck ? checkBox__innerBorderChecked : checkBox__innerBorderNotChecked} />
                </View>
            </TouchableOpacity>
            <Text style={checkBox__text}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    checkBox:{
        flexDirection: "row",
        alignItems: "center",
        width: "30%",
        marginBottom: 10
    },
    checkBox__outerBorder:{
        height: 32,
        width: 32,
        borderWidth: 2,
        borderColor: "#34cbed",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    checkBox__innerBorderChecked:{
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: "#34cbed"
    },
    checkBox__innerBorderNotChecked:{
        height: 15,
        width: 15,
        borderRadius: 50,
    },
    checkBox__text:{
        fontSize: 15,
        marginLeft: 3
    }
});

export default CheckBox;