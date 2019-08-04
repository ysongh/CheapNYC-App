import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from './common/Input';
import Spinner from './common/Spinner';
import { changeReviewText, changeReviewRating } from '../actions/ReviewActions';

class AddReview extends Component{
    constructor() {
        super();
        this.state = {
          loading: false,
          error: ''
        };
    }

    changeText(text){
        this.props.changeReviewText(text);
    }

    changeRating(text){
        this.props.changeReviewRating(text);
    }

    pressAddreview(){
        this.setState({loading: true});
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
                this.props.onCancel();
                Actions.deals();
            }
            else{
                this.setState({
                    error: "Something went wrong, try again",
                    loading: false
                });
            }
            
        })
        .catch((err) => {
            this.setState({
                error: "Something went wrong, try again",
                loading: false
            });
        });
    }

    render(){
        const { login__button, addReview, addReview__title, addReview__Area, errorMessage } = styles;

        const addReviewButtons = (
            <View>
                <TouchableOpacity style={login__button} onPress={() => this.pressAddreview()}>
                    <Text style={styles.deals__name}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={login__button} onPress={this.props.onCancel}>
                    <Text style={styles.deals__name}>Cancel</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <Modal
                visible={this.props.visible}
                transparent
                animationType="fade"
                onRequestClose={() => {}}>
                <View style={addReview}>
                    <View style={addReview__Area}>
                        <Text style={addReview__title}>Add Review</Text>
                        <Text style={errorMessage}>{this.state.error}</Text>
                        <Input
                            label="Text"
                            value={this.props.text}
                            placeholder="Comment..."
                            onChangeText = {this.changeText.bind(this)} />
                        <Input
                            label="Rating"
                            value={this.props.rating}
                            placeholder="1-5"
                            keyboardType="numeric"
                            onChangeText = {this.changeRating.bind(this)} />
                        {this.state.loading ? <Spinner /> : addReviewButtons}
                    </View>
                </View>
            </Modal>
        );
    };
};

const styles = {
    addReview:{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
    },
    addReview__title:{
        fontSize: 25,
        padding: 5,
        textAlign: 'center'
    },
    addReview__Area:{
        backgroundColor: 'white',
        marginTop: 150
    },
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

const mapStateToProps = state => {
    return{
        text: state.review.text,
        rating: state.review.rating
    }
}

export default connect(mapStateToProps, { changeReviewText, changeReviewRating })(AddReview);