import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class Deal extends Component{
    constructor() {
        super();
        this.state = {
          data: "",
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
            });
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
      }
  render() {
    const {deal, deal__title, deal__image, deal__name} = styles;

    console.log(this.state.data);

    return (
      <View style={deal}>
        <Text style={deal__title}>{this.state.data.name}</Text>
        <Image source={{uri: this.state.data.image}} style={deal__image}/>
        <Text style={deal__name}>Company Name: {this.state.data.company}</Text>
        <Text style={deal__name}>Location: {this.state.data.location}</Text>
        <Text style={deal__name}>Catergory: {this.state.data.category}</Text>
        <Text style={deal__name}>Price: ${this.state.data.price !== 0 ? this.state.data.price : "Free"}</Text>
        <Text style={deal__name}>Description: {this.state.data.description}</Text>
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