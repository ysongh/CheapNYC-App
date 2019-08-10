import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import defaultUserImage from '../../img/defaultUserImage.png';

class UserProfile extends Component{
    render(){
        return(
            <View>
                <Image source={defaultUserImage} style={{width: 150, height: 150}}/>
                <Text>Your Name</Text>
                <Text>List of Interest</Text>
            </View>
        );
    };
};

export default UserProfile;