import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    const { input__field } = styles;

    return(
        <View>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={input__field} />
        </View>
    )
}

const styles = {
    input__field:{
        height: 40,
        width: '100%',
        backgroundColor: 'yellow',
        marginBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15
    },
}

export default Input;