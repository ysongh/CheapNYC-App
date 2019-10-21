import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../common/Button';
import noImage from '../../img/blue.jpeg';

class DealsMap extends Component{
    state = {
        dealData: ""
    };

    showDeal(deal){
        this.setState({ dealData: deal})
    }

    render(){
        const deals = this.props.deals;
        const {deals__name, deals__rightSide, deals__container, deals__price, deals__button} = styles;

        const markers = deals.map(deal => {
            return (
                <MapView.Marker
                    key={deal._id}
                    coordinate={{
                        latitude: deal.latitude,
                        longitude: deal.longitude
                    }}
                    onPress={() => this.showDeal(deal)} />
            );
        });

        return (
            <View>
                <MapView
                    style={{ height: 420 }}
                    initialRegion={{
                        latitude: 40.7478,
                        longitude: -73.9560,
                        latitudeDelta: 0.5252,
                        longitudeDelta: 0.5242,
                    }} >
                        { markers }
                </MapView>
                <View style={deals__container}>
                    <View>
                        <Image source={this.state.dealData.image ? {uri: this.state.dealData.image} : noImage} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={deals__rightSide}>
                        <Text style={deals__name}>{this.state.dealData.name}</Text>
                        <Text style={deals__price}>${this.state.dealData.price === 0 ? "Free" : this.state.dealData.price}</Text>
                        <Button
                            buttonStyle={deals__button}
                            textStyle={deals__name}
                            value="See More"
                            onPress={() => Actions.deal({dealID: this.state.dealData._id})} />
                    </View>
                </View>
            </View>
        );
    };
};

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

export default DealsMap;