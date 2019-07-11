import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
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
        let url = `https://cnycserver.herokuapp.com/items/${this.props.dealID}/reviews`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              text: this.state.text,
              rating: this.state.rating
            }),
            headers: {
              'Authorization': tokenG,
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.msg){
                Actions.deal({dealID: this.props.dealID})
            }
            else{
                this.setState({
                    error: "Something went wrong, try again"
                });
            }
            
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }

    render(){
        const { login__button, addReview, addReview__Area, errorMessage } = styles;

        return (
            <Modal
                visible={this.props.visible}
                transparent
                animationType="fade"
                onRequestClose={() => {}}>
                <View>
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
                        <TouchableOpacity style={login__button} onPress={this.props.onCancel}>
                            <Text style={styles.deals__name}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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