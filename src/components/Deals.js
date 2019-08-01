import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import noImage from '../img/blue.jpeg';
import Spinner from './common/Spinner';
import { getDeals, getMoreDeals } from '../actions/DealActions';

class Deals extends Component{
    componentWillMount() {
        this.props.getDeals();
    }

    loadPage(){
        this.props.getMoreDeals(this.props.currentPage);
    }

    showListofDeals(){
        const {deals__name, deals__rightSide, deals__container, deals__price, deals__button} = styles;
        const deals = [];
        this.props.deals.forEach(deal => {
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
    
  render() {
    const loadButton = (
        <TouchableOpacity style={styles.deals__loadMoreButton} onPress={() => this.loadPage()}>
            <Text style={styles.deals__name}>Show More</Text>
        </TouchableOpacity>
    );

    return (
      <ScrollView>
          {this.props.loading ? <Spinner /> : this.showListofDeals()}
          {this.props.currentPage > this.props.totalDeals ? null : loadButton}    
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

const mapStateToProps = state => {
    return{
        deals: state.deals.deals,
        totalDeals: state.deals.totalDeals,
        currentPage: state.deals.currentPage,
        loading: state.deals.loading
    }
}

export default connect(mapStateToProps, { getDeals, getMoreDeals })(Deals);