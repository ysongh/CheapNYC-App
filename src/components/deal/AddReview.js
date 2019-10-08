import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Input from './common/Input';
import AreaInput from './common/AreaInput';
import Spinner from './common/Spinner';
import ButtonGroup from './common/ButtonGroup';
import { changeReviewText, changeReviewRating, addReview, clearReviewInputs } from '../actions/ReviewActions';

class AddReview extends Component{
    componentDidMount(){
        this.props.clearReviewInputs();
    }

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
        const { addReview, addReview__title, addReview__Area, errorMessage } = styles;

        const addReviewButtons = (
            <ButtonGroup
                value1="Add"
                value2="Cancel"
                onPress1={() => this.pressAddreview()}
                onPress2={this.props.onCancel} />
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
                        <AreaInput
                            label="Text"
                            value={this.props.text}
                            placeholder="Comment..."
                            onChangeText = {this.changeText.bind(this)} />
                        <Text style={errorMessage}>{this.props.error.text}</Text>
                        <Input
                            label="Rating"
                            value={this.props.rating}
                            placeholder="1-5"
                            keyboardType="numeric"
                            onChangeText = {this.changeRating.bind(this)} />
                        <Text style={errorMessage}>{this.props.error.rating}</Text>
                        {this.props.loading ? <Spinner /> : addReviewButtons}
                    </View>
                </View>
            </Modal>
        );
    };
};

const styles = StyleSheet.create({
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
    errorMessage:{
        marginLeft: 5,
        fontSize: 15,
        color: 'red'
    }
});

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        text: state.review.text,
        rating: state.review.rating,
        loading: state.review.loading,
        error: state.review.error
    }
}

export default connect(mapStateToProps, { changeReviewText, changeReviewRating, addReview, clearReviewInputs })(AddReview);