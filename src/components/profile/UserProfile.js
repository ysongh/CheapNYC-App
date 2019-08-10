import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import defaultUserImage from '../../img/defaultUserImage.png';
import backgroundImage from '../../img/backgroundImage.jpeg';

class UserProfile extends Component{
    render(){
        const { user__background, user__image, user__infor } = styles;

        return(
            <View>
                <ImageBackground source={backgroundImage} style={user__background}>
                    <Image source={defaultUserImage} style={user__image}/>
                    <Text style={user__infor}>Your Name</Text>
                    <Text style={user__infor}>List of Interest</Text>
                </ImageBackground>
            </View>
        );
    };
};

const styles = {
    user__background:{
        width: '100%',
        height: '80%',
    },
    user__image:{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 20
    },
    user__infor:{
        color: '#fcfcf7',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5
    }
}


export default UserProfile;