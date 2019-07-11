import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Input from './common/Input';

class AddReview extends Component{
    constructor() {
        super();
        this.state = {
          text: '',
          rating: '',
          error: ''
        };
    }

    pressAddreview(){
        console.log(this.state.text, this.state.rating)
    }

    render(){
        const { login__button, errorMessage } = styles;

        return (
            <View>
                <Text style={errorMessage}>{this.state.error}</Text>
                <Input
                    label="Text"
                    value={this.state.text}
                    placeholder="Comment..."
                    onChangeText = {text => this.setState({ text })} />
                <Input
                    label="Rating"
                    value={this.state.rating}
                    placeholder="1-5"
                    onChangeText = {rating => this.setState({ rating })} />
                <TouchableOpacity style={login__button} onPress={() => this.pressAddreview()}>
                    <Text style={styles.deals__name}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    login__button:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    errorMessage:{
        textAlign: 'center',
        margin: 15,
        fontSize: 15,
        color: 'red'
    }
}

export default AddReview;