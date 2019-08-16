import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import defaultUserImage from '../../img/defaultUserImage.png';
import backgroundImage from '../../img/backgroundImage.jpeg';
import { getUser } from '../../actions/ProfileActions';

class UserProfile extends Component{
    componentDidMount(){
        this.props.getUser(this.props.userId);
    }
    
    render(){
        const { user__background, user__image, user__infor } = styles;
        const profileImage = this.props.profile.image;

        return(
            <View>
                <ImageBackground source={backgroundImage} style={user__background}>
                    <Image source={profileImage ? { uri: profileImage } : defaultUserImage} style={user__image}/>
                    <Text style={user__infor}>{ this.props.profile.name }</Text>
                    <Text style={user__infor}>{ this.props.profile.title }</Text>
                </ImageBackground>
            </View>
        );
    };
};

const styles = StyleSheet.create({
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
});

const mapStateToProps = state => {
    return{
        profile: state.profile.userData
    }
}

export default connect(mapStateToProps, { getUser })(UserProfile);