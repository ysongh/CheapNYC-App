import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from './common/Input';
import Spinner from './common/Spinner';
import { changeReviewText, changeReviewRating, addReview } from '../actions/ReviewActions';

class AddReview extends Component{
    changeText(text){
        this.props.changeReviewText(text);
    }

    changeRating(text){
        this.props.changeReviewRating(text);
    }

    pressAddreview(){
        const reviewData = {
            text: this.props.text,
            rating: this.props.rating,
            token: this.props.token
        }
        this.props.addReview(reviewData, this.props.dealID);
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
                        <Text style={errorMessage}>{this.props.error}</Text>
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
                        {this.props.loading ? <Spinner /> : addReviewButtons}
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
        token: state.auth.token,
        text: state.review.text,
        rating: state.review.rating,
        loading: state.review.loading,
        error: state.review.error
    }
}

export default connect(mapStateToProps, { changeReviewText, changeReviewRating, addReview })(AddReview);