import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

import noImage from '../img/blue.jpeg';
import Bold from './common/Bold';
import Spinner from './common/Spinner';

class Deal extends Component{
    constructor() {
        super();
        this.state = {
          data: "",
          loading: true,
        };
    }
    componentDidMount() {
        let url = "https://cnycserver.herokuapp.com/items/" + this.props.dealID;
        fetch(url)
        .then(res => {
          return res.json();
        })
        .then((data) => {
          console.log(data)
          this.setState({
            data: data.item,
            loading: false
          });
        })
        .catch((err) => {
          console.log('There was a problem with your fetch request' + err.message);
        });
    }

    listOfReview(){
      const reviews = [];
      const {review} = styles;
      this.state.data.reviews.forEach(review => {
        reviews.push(
              <View key={review._id} style={review}>
                <Image source={review.image ? {uri: review.image} : noImage} style={{width: 100, height: 100}}/>
                <Text>{review.name}</Text>
                <Text>{review.text}</Text>
                <Text>{review.rating}</Text>
              </View>
              
          )
      });
      return reviews;
      console.log(this.state.data.reviews);
    }
  render() {
    const {deal, deal__title, deal__image, deal__name} = styles;
    const dealImage = this.state.data.image;

    const dealContent = (
      <View style={deal}>
        <Text style={deal__title}>{this.state.data.name}</Text>
        <Image source={dealImage ? {uri: dealImage} : noImage} style={deal__image}/>
        <Text style={deal__name}><Bold>Company Name:</Bold> {this.state.data.company}</Text>
        <Text style={deal__name}><Bold>Location:</Bold> {this.state.data.location}</Text>
        <Text style={deal__name}><Bold>Catergory:</Bold> {this.state.data.category}</Text>
        <Text style={deal__name}><Bold>Price:</Bold> ${this.state.data.price !== 0 ? this.state.data.price : "Free"}</Text>
        <Text style={deal__name}><Bold>Description:</Bold> {this.state.data.description}</Text>
      </View>
    );
    return (
      <ScrollView>
        {this.state.loading ? <Spinner /> : dealContent}
        {this.state.loading ? <Spinner /> : this.listOfReview()}
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
    marginBottom: 10
  },
  deal__name: {
    fontSize: 14,
    marginBottom: 4
  },
  review:{
    padding:5
  }
}

export default Deal;