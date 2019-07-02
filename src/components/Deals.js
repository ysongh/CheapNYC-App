import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import Spinner from './common/Spinner';

class Deals extends Component{
    constructor() {
        super();
        this.state = {
          data: [],
          loading: true
        };
    }
    componentWillMount() {
        let url = `https://cnycserver.herokuapp.com/items`;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
              data: data.items,
              loading: false
            });
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }

    showListofDeals(){
        const {deals__name, deals__rightSide, deals__container, deals__price, deals__button} = styles;
        const deals = [];
        this.state.data.forEach(deal => {
            deals.push(
                <View key={deal._id} style={deals__container}>
                    <View>
                        <Image source={{uri: deal.image}} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={deals__rightSide}>
                        <Text style={deals__name}>{deal.name}</Text>
                        <Text style={deals__price}>${deal.price === 0 ? "Free" : deal.price}</Text>
                        <TouchableOpacity style={deals__button} onPress={() => Linking.openURL("https://www.realcheapny.com/deal/" + deal._id)}>
                            <Text style={deals__name}>See More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            )
        });
        return deals;
    }
  render() {
    return (
      <ScrollView>
          {this.state.loading ? <Spinner /> : this.showListofDeals()}
      </ScrollView>
    );
  }
}

const styles = {
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
}

export default Deals;