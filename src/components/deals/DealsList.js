import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../common/Button';
import noImage from '../../img/blue.jpeg';

const DealsList = ({ deals }) => {
    const {deals__name, deals__rightSide, deals__container, deals__price, deals__button} = styles;

    return(
        <FlatList 
            keyExtractor={deal => deal._id}
            data={deals}
            renderItem={({ item }) => {
                return (
                    <View key={item._id} style={deals__container}>
                        <View>
                            <Image source={item.image ? {uri: item.image} : noImage} style={{width: 100, height: 100}}/>
                        </View>
                        <View style={deals__rightSide}>
                            <Text style={deals__name}>{item.name}</Text>
                            <Text style={deals__price}>${item.price === 0 ? "Free" : item.price}</Text>
                            <Button
                                buttonStyle={deals__button}
                                textStyle={deals__name}
                                value="See More"
                                onPress={() => Actions.deal({dealID: item._id})} />
                        </View>
                    </View>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    deals__container:{
        backgroundColor: "#daf2f2",
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 10,
        padding: 2
    },
    deals__rightSide:{
        paddingLeft: 10,
    },
    deals__name:{
        fontSize: 20
    },
    deals__button:{
        alignSelf: 'flex-start',
        backgroundColor: "#f0b6b7",
        borderRadius: 5,
        padding: 6,
        marginTop: 10
    },
    deals__price:{
        fontSize: 20
    }
});

export default DealsList;