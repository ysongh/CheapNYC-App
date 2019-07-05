import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

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
            this.setState({
              data: data.item,
              loading: false
            });
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
      }
  render() {
    const {deal, deal__title, deal__image, deal__name} = styles;

    const dealContent = (
      <View style={deal}>
        <Text style={deal__title}>{this.state.data.name}</Text>
        <Image source={{uri: this.state.data.image}} style={deal__image}/>
        <Text style={deal__name}><Bold>Company Name:</Bold> {this.state.data.company}</Text>
        <Text style={deal__name}><Bold>Location:</Bold> {this.state.data.location}</Text>
        <Text style={deal__name}><Bold>Catergory:</Bold> {this.state.data.category}</Text>
        <Text style={deal__name}><Bold>Price:</Bold> ${this.state.data.price !== 0 ? this.state.data.price : "Free"}</Text>
        <Text style={deal__name}><Bold>Description:</Bold> {this.state.data.description}</Text>
      </View>
    );
    return (
      <View>
        {this.state.loading ? <Spinner /> : dealContent}
      </View>
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
  }
}

export default Deal;