import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBar = ({ placeholder, value, onChangeText, onEndEditing }) => {
    const { searchBar, searchBar__Input } = styles;

    return(
        <View style={searchBar}>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                style={searchBar__Input}
                clearButtonMode="while-editing"
                onChangeText={onChangeText}
                onEndEditing={onEndEditing} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar:{
        backgroundColor: '#dcdee0',
        height: 35,
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 5
    },
    searchBar__Input:{
        flex: 1,
        fontSize: 17,
        paddingHorizontal: 15
    }
});

export default SearchBar;