import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

    updateUserProfile(){

    }
    
    render(){
        const { profile__label, checkBox__group, button__centerButton, button__text } = styles;

        return(
            <View style={{ padding: 2 }}>
                <Text style={profile__label}>Select your Interests:</Text>
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
                <TouchableOpacity style={button__centerButton} onPress={() => this.updateUserProfile()}>
                    <Text style={button__text}>Update</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    profile__label: {
        fontSize: 18,
        marginVertical: 4,
        fontWeight: "bold"
    },
    checkBox__group:{
        flexDirection: "row",
        justifyContent: "space-around", 
        flexWrap: "wrap",
        borderWidth: 2,
        borderColor: "#e8176b"
    },
    button__centerButton:{
        width: "50%",
        alignSelf: "center",
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 6,
        marginTop: 10
    },
    button__text:{
        textAlign: 'center',
        fontSize: 20
    }
})

export default EditProfile;