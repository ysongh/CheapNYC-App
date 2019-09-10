import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Button from '../common/Button';
import { changeDealInfor, createNewDeal } from '../../actions/DealFormActions';

class AddDeal extends Component{
    addDeal(name, category, price, location, city, description, company, duration){
        const dealData = {
            name: name,
            category: category,
            price: price,
            location: location,
            city: city,
            description: description,
            company: company,
            duration: duration
        }
        this.props.createNewDeal(dealData, this.props.token);
    };

    render(){
        const { name, category, price, location, city, description, company, duration } = this.props;
        const { addDeal__button } = styles;

        return(
            <View>
                <Input
                    value={name}
                    label="Name"
                    placeholder="EX - Pizza"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'name', value: text})} />
                <Input
                    value={category}
                    label="Category"
                    placeholder="EX - Food"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'category', value: text})} />
                <Input
                    value={price}
                    label="Price"
                    placeholder="EX - 1.99"
                    keyboardType="numeric"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'price', value: text})} />
                <Input
                    value={location}
                    label="Location"
                    placeholder="EX - 123 Pizza St"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'location', value: text})} />
                <Input
                    value={city}
                    label="City"
                    placeholder="EX - Bronx"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'city', value: text})} />
                <Input
                    value={description}
                    label="Description"
                    placeholder="EX - This is a yummy pizza"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'description', value: text})} />
                <Input
                    value={company}
                    label="Company"
                    placeholder="EX - Pizza Store"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'company', value: text})} />
                <Input
                    value={duration}
                    label="Duration"
                    placeholder="EX - 30"
                    keyboardType="numeric"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'duration', value: text})} />
                <Button
                    buttonStyle={addDeal__button}
                    value="Create Deal"
                    onPress={() => this.addDeal(name, category, price, location, city, description, company, duration)} />
            </View>
        );
    };
};

const mapStateToProps = state => {
    return{
        name: state.dealForm.name,
        category: state.dealForm.category,
        price: state.dealForm.price,
        location: state.dealForm.location,
        city: state.dealForm.city,
        description: state.dealForm.description,
        company: state.dealForm.company,
        duration: state.dealForm.duration,
        token: state.auth.token,
    }
}

const styles = StyleSheet.create({
    addDeal__button:{
        justifyContent: "center",
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        paddingVertical: 15,
        marginTop: 20,
        marginHorizontal: 5
    },
})

export default connect(mapStateToProps, { changeDealInfor, createNewDeal })(AddDeal);