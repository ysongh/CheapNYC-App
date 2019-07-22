import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

import noImage from '../img/blue.jpeg';
import Spinner from './common/Spinner';

class Deals extends Component{
    constructor() {
        super();
        this.state = {
          data: [],
          loading: true,
          totalDeals: 0,
          currentPage: 2
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
              loading: false,
              totalDeals: Math.floor(data.totalDeals / 12) + 1
            });
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }

    loadPage(){
        let url = "https://cnycserver.herokuapp.com/items?page=" + this.state.currentPage;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            this.setState({
              data: this.state.data.concat(data.items),
              currentPage: this.state.currentPage += 1
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
                        <Image source={deal.image ? {uri: deal.image} : noImage} style={{width: 100, height: 100}}/>
                    </View>
                    <View style={deals__rightSide}>
                        <Text style={deals__name}>{deal.name}</Text>
                        <Text style={deals__price}>${deal.price === 0 ? "Free" : deal.price}</Text>
                        <TouchableOpacity style={deals__button} onPress={() => Actions.deal({dealID: deal._id})}>
                            <Text style={deals__name}>See More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            )
        });
        return deals;
    }

    pressLogout(){
        tokenG = "";
        Actions.main();
    }
  render() {
    const loadButton = (
        <TouchableOpacity style={styles.deals__loadMoreButton} onPress={() => this.loadPage()}>
            <Text style={styles.deals__name}>Show More</Text>
        </TouchableOpacity>
    );

    return (
      <ScrollView>
          {this.state.loading ? <Spinner /> : this.showListofDeals()}
          {this.state.currentPage > this.state.totalDeals ? null : loadButton}    
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
    },
    deals__loadMoreButton:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 6,
        marginBottom: 40
    }
}

export default Deals;