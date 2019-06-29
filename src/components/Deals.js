import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class Deals extends Component{
    constructor() {
        super();
        this.state = {
          data: [],
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
            });
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }

    showListofDeals(){
        const deals = [];
        this.state.data.forEach(deal => {
            deals.push(
                <View key={deal._id}>
                    <Text>{deal.name}</Text>
                    <Text>${deal.price}</Text>
                    <Image source={{uri: deal.image}} style={{width: 193, height: 110}}/>
                </View>
                
            )
        });
        return deals;
    }
  render() {
    return (
      <View>
          {this.showListofDeals()}
      </View>
    );
  }
}

export default Deals;