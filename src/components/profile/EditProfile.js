import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CheckBox from '../common/CheckBox';

class EditProfile extends Component{
    state  = {
        interestOptions: ["Sports", "Adventure", "Food", "Social", "Bars", "Photography", "Outdoor", "Indoor", "Events", "Concerts",
            "Theater", "Karaoke", "Movies", "Night Life", "Dancing", "Museums", "Party", "Games", "Biking", "Hiking"]
    }
    
    render(){
        const { checkBox__group } = styles;

        return(
            <View>
                <Text>Edit</Text>
                <View style={checkBox__group}>
                    {
                        this.state.interestOptions.map(interest => {
                            return <CheckBox value={interest}/>
                        })
                    }
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    checkBox__group:{
        flexDirection: "row",
        justifyContent: "space-around", 
        flexWrap: "wrap"
    }
})

export default EditProfile;