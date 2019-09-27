import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import AddReview from '../AddReview';
import noImage from '../../img/blue.jpeg';
import Bold from '../common/Bold';
import Hyperlink from '../common/Hyperlink';
import Spinner from '../common/Spinner';
import { getDealById } from '../../actions/DealActions';
import { openAddReviewModal, closeAddReviewModal } from '../../actions/ReviewActions';

class Deal extends Component{
    componentDidMount() {
        this.props.getDealById(this.props.dealID);
    }

    listOfReview(){
      const {reviewX, review__image, review__infor} = styles;
      
      return <FlatList 
        keyExtractor={review => review._id}
        data={this.props.deal.reviews}
        renderItem={({ item }) => {
          return (
            <View key={item._id} style={reviewX}>
                <Image source={item.image ? {uri: item.image} : noImage} style={review__image}/>
                <View style={review__infor}>
                  <Text onPress={() => Actions.userProfile({userId: item.userId})}><Bold>Author:</Bold> <Hyperlink>{item.name}</Hyperlink></Text>
                  <Text>{item.text}</Text>
                  <Text><Bold>Rating: </Bold>{item.rating}</Text>
                </View>                
              </View>
          )
        }}/>
    }
    onCloseModal(){
      this.props.closeAddReviewModal();
    }
  render() {
    const { deal, deal__title, deal__image, deal__name, deal__button, map } = styles;
    const { name, company, location, category, price, description, latitude, longitude, image } = this.props.deal;

    const dealContent = (
      <View style={deal}>
        <Text style={deal__title}>{name}</Text>
        <Image source={image ? {uri: image} : noImage} style={deal__image}/>
        <Text style={deal__name}><Bold>Company Name:</Bold> {company}</Text>
        <Text style={deal__name}><Bold>Location:</Bold> {location}</Text>
        <Text style={deal__name}><Bold>Catergory:</Bold> {category}</Text>
        <Text style={deal__name}><Bold>Price:</Bold> ${price !== 0 ? price : "Free"}</Text>
        <Text style={deal__name}><Bold>Description:</Bold> {description}</Text>
        <MapView
          style={map}
          initialRegion={{
            latitude: latitude || 40.7478,
            longitude: longitude || -73.9560,
            latitudeDelta: 0.0052,
            longitudeDelta: 0.0042,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: latitude || 40.7478,
              longitude: longitude || -73.9560,
            }}
            title={ company }
            description={ location }
         />
        </MapView>
      </View>
    );

    const addReviewButton = (
      <TouchableOpacity style={deal__button} onPress={() => this.props.openAddReviewModal()}>
        <Text style={deal__name}>Add Review</Text>
      </TouchableOpacity>
    );

    const loginLink = (
      <Text style={deal__title}>Log in to add review</Text>
    );

    return (
      <ScrollView>
        {this.props.loading ? <Spinner /> : dealContent}
        {this.props.token ? addReviewButton : loginLink}
        {this.props.loading ? <Spinner /> : this.listOfReview()}
        <AddReview
          dealID={this.props.dealID}
          visible={this.props.showAddReviewModal}
          onCancel={this.onCloseModal.bind(this)} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    padding: 5
  },
  deal__title: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
    marginTop: 5,
    marginBottom: 10
  },
  deal__image:{
    width: "100%",
    height: 200,
    backgroundColor: "#6a81a6",
    marginBottom: 10
  },
  deal__name: {
    fontSize: 14,
    marginBottom: 4
  },
  deal__button:{
    alignSelf: 'center',
    backgroundColor: "#82cfe8",
    borderRadius: 5,
    padding: 6,
    marginTop: 10
  },
  reviewX:{
    padding: 5,
    flexDirection: "row",
  },
  review__image:{
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6a81a6"
  },
  review__infor:{
    flexDirection: "column",
    justifyContent: 'space-around',
    marginLeft: 5
  },
  map:{
    height: 280
  }
});

const mapStateToProps = state => {
  return{
      token: state.auth.token,
      deal: state.deal.deal,
      loading: state.deal.loading,
      showAddReviewModal: state.deal.showAddReviewModal
  }
}

export default connect(mapStateToProps, { getDealById, openAddReviewModal, closeAddReviewModal })(Deal);