import React, {Component} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import SearchBar from '../common/SearchBar';
import noImage from '../../img/blue.jpeg';
import Spinner from '../common/Spinner';
import { getDeals, getMoreDeals, getDealsByName } from '../../actions/DealActions';

class Deals extends Component{
    state = {
        dealName: ''
    };

    componentDidMount() {
        this.props.getDeals("All");
    }

    loadPage(){
        console.log(this.props.filterType);
        this.props.getMoreDeals(this.state.dealName, this.props.currentPage, this.props.filterType);
    }

    showListofDeals(){
        const {deals__name, deals__rightSide, deals__container, deals__price, deals__button} = styles;
        
        return (
            <FlatList 
                keyExtractor={deal => deal._id}
                data={this.props.deals}
                renderItem={({ item }) => {
                    return (
                        <View key={item._id} style={deals__container}>
                            <View>
                                <Image source={item.image ? {uri: item.image} : noImage} style={{width: 100, height: 100}}/>
                            </View>
                            <View style={deals__rightSide}>
                                <Text style={deals__name}>{item.name}</Text>
                                <Text style={deals__price}>${item.price === 0 ? "Free" : item.price}</Text>
                                <TouchableOpacity style={deals__button} onPress={() => Actions.deal({dealID: item._id})}>
                                    <Text style={deals__name}>See More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }} />
        );
    }

    searchDealsByName(){
        this.props.getDealsByName(this.state.dealName, "byName");
    }
    
  render() {
    const loadButton = (
        <TouchableOpacity style={styles.deals__loadMoreButton} onPress={() => this.loadPage()}>
            <Text style={styles.deals__name}>Show More</Text>
        </TouchableOpacity>
    );

    return (
      <ScrollView>
          <SearchBar
            placeholder="Search Deals"
            value={this.state.dealName}
            onChangeText = {dealName => this.setState({ dealName })}
            onEndEditing = {() => this.searchDealsByName()} />
          {this.props.deals.length !== 0 ? null : <Text style={styles.deals__message}>No Deals Found</Text>}
          {this.props.loading ? <Spinner /> : this.showListofDeals()}
          {this.props.currentPage - 1 >= this.props.totalDeals ? null : loadButton}    
      </ScrollView>
    );
  }
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
    },
    deals__loadMoreButton:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 6,
        marginBottom: 40
    },
    deals__message:{
        textAlign: 'center',
        fontSize: 26,
        marginVertical: 20,
        color: '#db4670'
    }
});

const mapStateToProps = state => {
    return{
        deals: state.deals.deals,
        totalDeals: state.deals.totalDeals,
        currentPage: state.deals.currentPage,
        loading: state.deals.loading,
        filterType: state.deals.filterType
    }
}

export default connect(mapStateToProps, { getDeals, getMoreDeals, getDealsByName })(Deals);