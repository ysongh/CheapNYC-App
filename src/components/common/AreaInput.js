import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
    const { inputArea, input__label, input__field } = styles;

    return(
        <View style={inputArea}>
            <Text style={input__label}>{label}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                autoCorrect={false}
                onChangeText={onChangeText}
                clearButtonMode="while-editing"
                style={input__field}
                multiline = {true}
                numberOfLines = {10} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputArea:{
        padding: 1,
        marginTop: 10
    },
    input__label:{
        fontSize: 18,
        paddingLeft: 5
    },
    input__field:{
        height: 130,
        width: '100%',
        backgroundColor: '#dcdee0',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
    }
});

export default Input;