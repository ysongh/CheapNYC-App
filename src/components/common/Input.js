import React from 'react';
import { View, Text, TextInput } from 'react-native';

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
                style={input__field} />
        </View>
    )
}

const styles = {
    inputArea:{
        padding: 1
    },
    input__label:{
        fontSize: 18,
        paddingLeft: 5
    },
    input__field:{
        height: 40,
        width: '100%',
        backgroundColor: 'yellow',
        marginBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
    },
}

export default Input;