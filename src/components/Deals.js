import React, {Component} from 'react';
import {Text, View, Image, Button} from 'react-native';
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
        const {deals__name, deals__rightSide, deals__container, deals__price} = styles;
        const deals = [];
        this.state.data.forEach(deal => {
            deals.push(
                <View key={deal._id} style={deals__container}>
                    <View>
                        <Image source={{uri: deal.image}} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={deals__rightSide}>
                        <Text style={deals__name}>{deal.name}</Text>
                        <Text style={deals__price}>${deal.price}</Text>
                        <Button title="See More"/>
                    </View>
                </View>
                
            )
        });
        return deals;
    }
  render() {
    return (
      <View>
          {this.state.loading ? <Spinner /> : this.showListofDeals()}
      </View>
    );
  }
}

const styles = {
    deals__container:{
        backgroundColor: "#daf2f2",
        flexDirection: "row",
        marginBottom: 10
    },
    deals__rightSide:{
        paddingLeft: 10,
    },
    deals__name:{
        fontSize: 20
    },
    deals__price:{
        fontSize: 20
    }
}

export default Deals;