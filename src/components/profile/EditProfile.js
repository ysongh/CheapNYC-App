import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Input from '../common/Input';
import CheckBox from '../common/CheckBox';
import Spinner from '../common/Spinner';
import defaultUserImage from '../../img/defaultUserImage.png';
import { updateUserInformation } from '../../actions/ProfileActions';

const options = {
    title: 'Upload an Image',
    chooseFromLibraryButtonTitle: 'Choose image from your phone',
    takePhotoButtonTitle: "Take a photo with your phone"
};

class EditProfile extends Component{
    state  = {
        name: this.props.nameProfile,
        interestOptions: [
                            {"name": "Sports", isCheck: false}, {"name": "Adventure", isCheck: false}, {"name": "Food", isCheck: false}, {"name": "Social", isCheck: false}, {"name": "Bars", isCheck: false},
                            {"name": "Photography", isCheck: false}, {"name": "Outdoor", isCheck: false}, {"name": "Indoor", isCheck: false}, {"name": "Events", isCheck: false}, {"name": "Concerts", isCheck: false},
                            {"name": "Theater", isCheck: false}, {"name": "Karaoke", isCheck: false}, {"name": "Movies", isCheck: false}, {"name": "Night Life", isCheck: false}, {"name": "Dancing", isCheck: false},
                            {"name": "Museums", isCheck: false}, {"name": "Party", isCheck: false}, {"name": "Games", isCheck: false}, {"name": "Biking", isCheck: false}, {"name": "Hiking", isCheck: false},
                    ],
        imageSource: "",
        imageData: ""
    }
    componentDidMount(){
        let userInterest = this.props.userInterest.split(", ");
        let newOptions = this.state.interestOptions;

        for(let interestName of userInterest){
            newOptions.forEach(interest => {
                if(interest.name === interestName){
                    interest.isCheck = true;
                }
            })
        };
        
        this.setState({interestOptions: newOptions})
    }

    changeName(text){
        this.setState({ name: text });
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
        let newInterest = [];

        this.state.interestOptions.forEach(interest => {
            if(interest.isCheck){
                newInterest.push(interest.name);
            }
        })

        this.props.updateUserInformation(this.props.token, this.props.userIdProfile, this.state.name, newInterest.join(", "));
    }

    selectImage(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
          
              this.setState({
                imageSource: source,
                imageData: response.data
              });
            }
          });
    }

    changeImage(){
        const url = `https://cnycserver.herokuapp.com/users/${this.props.userIdProfile}/edit-image`;

        RNFetchBlob.fetch('PUT', url, {
            'Authorization': this.props.token,
            otherHeader : "foo",
            'Content-Type' : 'multipart/form-data',
        }, [
            { name : 'image', filename : 'image.png', type:'image/png', data: this.state.imageData}
        ]).then((resp) => {
            console.log(resp);
            console.log("it work");
        }).catch((err) => {
            console.log(err);
        })

    }
    
    render(){
        const { profile__label, user__image, checkBox__group, button__centerButton, button__text } = styles;
        const updateButton = (
            <TouchableOpacity style={button__centerButton} onPress={() => this.updateUserProfile()}>
                <Text style={button__text}>Update</Text>
            </TouchableOpacity>
        );

        return(
            <ScrollView style={{ padding: 2 }}>
                <Input
                    label="Name"
                    value={this.state.name}
                    placeholder="EX - Joe Doe"
                    onChangeText = {this.changeName.bind(this)} />

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
                { this.props.userLoading ? <Spinner /> : updateButton }

                <Image source={this.state.imageSource ? this.state.imageSource : defaultUserImage} style={user__image}/>
                <TouchableOpacity style={button__centerButton} onPress={() => this.selectImage()}>
                    <Text style={button__text}>Select Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button__centerButton} onPress={() => this.changeImage()}>
                    <Text style={button__text}>Change Image</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    profile__label: {
        fontSize: 18,
        marginVertical: 4,
        fontWeight: "bold"
    },
    user__image:{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 50
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
});

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        userLoading: state.profile.userLoading
    };
};

export default connect(mapStateToProps, { updateUserInformation })(EditProfile);