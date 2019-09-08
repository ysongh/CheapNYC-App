import React, { Component } from 'react';
import { View } from 'react-native';

import Input from '../common/Input';

class AddDeal extends Component{
    render(){
        return(
            <View>
                <Input
                    label="Name"
                    placeholder="EX - Pizza" />
                <Input
                    label="Category"
                    placeholder="EX - Food" />
                <Input
                    label="Price"
                    placeholder="EX - 1.99"
                    keyboardType="numeric" />
                <Input
                    label="Location"
                    placeholder="EX - 123 Pizza St" />
                <Input
                    label="Description"
                    placeholder="EX - This is a yummy pizza" />
                <Input
                    label="Company"
                    placeholder="EX - Pizza Store" />
                <Input
                    label="Duration"
                    placeholder="EX - 30"
                    keyboardType="numeric" />
            </View>
        );
    };
};

export default AddDeal;