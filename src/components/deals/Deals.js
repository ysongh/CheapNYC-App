import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from '../common/SearchBar';
import Spinner from '../common/Spinner';
import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import Dealslist from './DealsList';
import DealsMap from './DealsMap';
import { getDeals, getMoreDeals, getDealsByName } from '../../actions/DealActions';

class Deals extends Component{
    state = {
        dealName: '',
        showList: true,
        showMap: false
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

    switchView(){
        this.setState({
            showList: !this.state.showList,
            showMap: !this.state.showMap
        });
    }
    
  render() {
    const { deals__loadMoreButton, deals__message, deals__options } = styles;

    const dealsList = this.props.loading ? <Spinner /> : <Dealslist deals={this.props.deals} />;

    const dealsMap = this.props.loading ? <Spinner /> : <DealsMap deals={this.props.deals} />;
    
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
          <View style={deals__options}>
            <CheckBox
                value="List"
                isCheck={this.state.showList}
                onPress={() => this.switchView()}/>
            <CheckBox
                value="Map"
                isCheck={this.state.showMap}
                onPress={() => this.switchView()}/>
          </View>

          {this.props.deals.length !== 0 ? null : <Text style={deals__message}>No Deals Found</Text>}
          {this.state.showList ? dealsList : dealsMap}
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
    },
    deals__options:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
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