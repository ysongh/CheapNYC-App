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
        let url = `https://cnycserver.herokuapp.com/items/5d06d0c8f8af1d0004212e24`;
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
    const {deal} = styles;

    return (
      <View style={deal}>
        <Text>{this.state.data.name}</Text>
        <Image source={{uri: this.state.data.image}} style={{width: 193, height: 110}}/>
        <Text>{this.state.data.date}</Text>
        <Text>{this.state.data.location}</Text>
        <Text>{this.state.data.description}</Text>
      </View>
    );
  }
}

const styles = {
  deal: {
    padding: 5
  }
}

export default Deal;