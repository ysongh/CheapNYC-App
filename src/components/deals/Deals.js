import React, {Component} from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from '../common/SearchBar';
import Spinner from '../common/Spinner';
import Button from '../common/Button';
import Dealslist from './DealsList';
import DealsMap from './DealsMap';
import { getDeals, getMoreDeals, getDealsByName } from '../../actions/DealActions';

class Deals extends Component{
    state = {
        dealName: ''
    };

    componentDidMount() {
        this.props.getDeals("All");
    }

    loadPage(){
        this.props.getMoreDeals(this.state.dealName, this.props.currentPage, this.props.filterType);
    }

    searchDealsByName(){
        this.props.getDealsByName(this.state.dealName, "byName");
    }
    
  render() {
    const { deals__loadMoreButton, deals__message } = styles;

    const dealsList = (
        <Dealslist deals={this.props.deals}/>
    );

    const dealsMap = (
        <DealsMap deals={this.props.deals} />
    )
    
    const loadButton = (
        <Button
            buttonStyle={deals__loadMoreButton}
            textStyle={styles.deals__name}
            value="Show More"
            onPress={() => this.loadPage()} />
    );

    return (
      <ScrollView>
          <SearchBar
            placeholder="Search Deals"
            value={this.state.dealName}
            onChangeText = {dealName => this.setState({ dealName })}
            onEndEditing = {() => this.searchDealsByName()} />

          {this.props.deals.length !== 0 ? null : <Text style={deals__message}>No Deals Found</Text>}
          {this.props.loading ? <Spinner /> : dealsMap}
          {this.props.loading ? <Spinner /> : dealsList}
          {this.props.currentPage - 1 >= this.props.totalDeals ? null : loadButton}    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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