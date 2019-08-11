import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import AddReview from '../AddReview';
import noImage from '../../img/blue.jpeg';
import Bold from '../common/Bold';
import Spinner from '../common/Spinner';
import { getDealById } from '../../actions/DealActions';
import { openAddReviewModal, closeAddReviewModal } from '../../actions/ReviewActions';

class Deal extends Component{
    componentDidMount() {
        this.props.getDealById(this.props.dealID);
    }

    listOfReview(){
      const reviews = [];
      const {reviewX, review__image, review__infor} = styles;
      this.props.deal.reviews.forEach(review => {
        reviews.push(
              <View key={review._id} style={reviewX}>
                <Image source={review.image ? {uri: review.image} : noImage} style={review__image}/>
                <View style={review__infor}>
                  <Text><Bold>Author:</Bold> {review.name}</Text>
                  <Text>{review.text}</Text>
                  <Text><Bold>Rating: </Bold>{review.rating}</Text>
                </View>                
              </View>
          )
      });
      return reviews;
    }
    onCloseModal(){
      this.props.closeAddReviewModal();
    }
  render() {
    const {deal, deal__title, deal__image, deal__name, deal__button} = styles;
    const dealImage = this.props.deal.image;

    const dealContent = (
      <View style={deal}>
        <Text style={deal__title}>{this.props.deal.name}</Text>
        <Image source={dealImage ? {uri: dealImage} : noImage} style={deal__image}/>
        <Text style={deal__name}><Bold>Company Name:</Bold> {this.props.deal.company}</Text>
        <Text style={deal__name}><Bold>Location:</Bold> {this.props.deal.location}</Text>
        <Text style={deal__name}><Bold>Catergory:</Bold> {this.props.deal.category}</Text>
        <Text style={deal__name}><Bold>Price:</Bold> ${this.props.deal.price !== 0 ? this.props.deal.price : "Free"}</Text>
        <Text style={deal__name}><Bold>Description:</Bold> {this.props.deal.description}</Text>
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

const styles = {
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
  }
}

const mapStateToProps = state => {
  return{
      token: state.auth.token,
      deal: state.deal.deal,
      loading: state.deal.loading,
      showAddReviewModal: state.deal.showAddReviewModal
  }
}

export default connect(mapStateToProps, { getDealById, openAddReviewModal, closeAddReviewModal })(Deal);