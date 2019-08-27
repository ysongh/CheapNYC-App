import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CheckBox from '../common/CheckBox';

class EditProfile extends Component{
    state  = {
        interestOptions: [
                            {"name": "Sports", isCheck: false}, {"name": "Adventure", isCheck: false}, {"name": "Food", isCheck: false}, {"name": "Social", isCheck: false}, {"name": "Bars", isCheck: false},
                            {"name": "Photography", isCheck: false}, {"name": "Outdoor", isCheck: false}, {"name": "Indoor", isCheck: false}, {"name": "Events", isCheck: false}, {"name": "Concerts", isCheck: false},
                            {"name": "Theater", isCheck: false}, {"name": "Karaoke", isCheck: false}, {"name": "Movies", isCheck: false}, {"name": "Night Life", isCheck: false}, {"name": "Dancing", isCheck: false},
                            {"name": "Museums", isCheck: false}, {"name": "Party", isCheck: false}, {"name": "Games", isCheck: false}, {"name": "Biking", isCheck: false}, {"name": "Hiking", isCheck: false},
                    ]
    }

    handleCheckBox(interestName) {
        let newOptions = this.state.interestOptions;

        newOptions.forEach(interest => {
            if(interest.name === interestName){
                interest.isCheck = !interest.isCheck;
            }
        })

        this.setState({ interestOptions: newOptions});
    }
    
    render(){
        const { checkBox__group } = styles;

        return(
            <View>
                <Text>Edit</Text>
                <View style={checkBox__group}>
                    {
                        this.state.interestOptions.map(interest => {
                            return <CheckBox
                                        key={interest.name}
                                        value={interest.name}
                                        isCheck={interest.isCheck}
                                        onPress={() => this.handleCheckBox(interest.name)}/>
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