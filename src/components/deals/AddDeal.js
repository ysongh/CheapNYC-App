import React, { Component } from 'react';
import { ScrollView, Picker, StyleSheet } from 'react-native';
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
            <ScrollView>
                <Input
                    value={name}
                    label="Name"
                    placeholder="EX - Pizza"
                    onChangeText={text => this.props.changeDealInfor({ prop: 'name', value: text})} />
                <Picker
                    selectedValue={category}
                    onValueChange={text => this.props.changeDealInfor({ prop: 'category', value: text})}
                >
                    <Picker.Item label="Category" value="" />
                    <Picker.Item label="Food" value="Food" />
                    <Picker.Item label="Drinks" value="Drinks" />
                    <Picker.Item label="Activities" value="Activities" />
                    <Picker.Item label="Events" value="Events" />
                    <Picker.Item label="Arts" value="Arts" />
                    <Picker.Item label="Sports" value="Sports" />
                    <Picker.Item label="Outdoor" value="Outdoor" />
                    <Picker.Item label="Indoor" value="Indoor" />
                    <Picker.Item label="Music" value="Music" />
                    <Picker.Item label="Classes" value="Classes" />
                    <Picker.Item label="Travel" value="Travel" />
                    <Picker.Item label="Social" value="Social" />
                    <Picker.Item label="Others" value="Others" />
                </Picker>
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
                <Picker
                    selectedValue={city}
                    onValueChange={text => this.props.changeDealInfor({ prop: 'city', value: text})}
                >
                    <Picker.Item label="City" value="" />
                    <Picker.Item label="Manhattan" value="Manhattan" />
                    <Picker.Item label="Queens" value="Queens" />
                    <Picker.Item label="Bronx" value="Bronx" />
                    <Picker.Item label="Brooklyn" value="Brooklyn" />
                    <Picker.Item label="Staten Island" value="Staten Island" />
                </Picker>
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
            </ScrollView>
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