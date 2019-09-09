import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Input from '../common/Input';
import { changeDealInfor } from '../../actions/DealFormActions';

class AddDeal extends Component{
    
    render(){
        const { name, category, price, location, description, company, duration } = this.props;

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
        description: state.dealForm.description,
        company: state.dealForm.company,
        duration: state.dealForm.duration
    }
}

export default connect(mapStateToProps, { changeDealInfor })(AddDeal);