import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import defaultUserImage from '../../img/defaultUserImage.png';
import backgroundImage from '../../img/backgroundImage.jpeg';
import Spinner from '../common/Spinner';
import { getUser, getUserProfileDeals } from '../../actions/ProfileActions';

class UserProfile extends Component{
    state = {
        dealListType: 'Favorites'
    }
    componentDidMount(){
        this.props.getUser(this.props.userId);
        this.props.getUserProfileDeals(this.props.userId, this.state.dealListType);
    }

    getFavoritesDeals(){
        this.setState({dealListType: "Favorites"});
        this.props.getUserProfileDeals(this.props.userId, "Favorites");
    }

    getDealsAdded(){
        this.setState({dealListType: "DealsAdded"});
        this.props.getUserProfileDeals(this.props.userId, "DealsAdded");
    }
    
    render(){
        const { user__background, user__image, user__infor, user__dealList, user__dealText, user__dealButton, user__buttonGroup, user__button, user__selectButton, user__buttonText } = styles;
        const profileImage = this.props.profile.image;

        const userInfor = (
            <View>
                <Image source={profileImage ? { uri: profileImage } : defaultUserImage} style={user__image}/>
                <Text style={user__infor}>{ this.props.profile.name }</Text>
                <Text style={user__infor}>{ this.props.profile.title }</Text>
            </View>
        );

        const listOfDeals = (
            <FlatList 
                keyExtractor={deal => deal.id}
                data={this.props.dealsList}
                renderItem={({ item }) => {
                    return (
                        <View key={item.id} style={user__dealList}>
                            <Text style={user__dealText}>{item.name}</Text>
                            <TouchableOpacity style={user__dealButton} onPress={() => Actions.deal({dealID: item.id})}>
                                <Text style={user__dealText}>>></Text>
                            </TouchableOpacity>
                        </View>
                    )
                }} />
        );

        return(
            <View style={{ flex: 1 }}>
                <ImageBackground source={backgroundImage} style={user__background}>
                    {this.props.userLoading ? <Spinner /> : userInfor}
                </ImageBackground>

                <View style={user__buttonGroup}>
                    <TouchableOpacity style={this.state.dealListType === 'Favorites' ? user__selectButton : user__button} onPress={() => this.getFavoritesDeals()}>
                        <Text style={user__buttonText}>Deals Liked</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.dealListType === 'DealsAdded' ? user__selectButton : user__button} onPress={() => this.getDealsAdded()}>
                        <Text style={user__buttonText}>Deals Post</Text>
                    </TouchableOpacity>
                </View>
                
                {this.props.dealsLoading ? <Spinner /> : listOfDeals}
            </View>
        );
    };
};

const styles = StyleSheet.create({
    user__background:{
        width: '100%',
        height: 320,
        backgroundColor: 'blue'
    },
    user__image:{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 50
    },
    user__infor:{
        color: '#fcfcf7',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5
    },
    user__dealList:{
        paddingLeft: 10,
        margin: 1,
        borderColor: '#910d1a',
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    user__dealText: {
        fontSize: 15
    },
    user__dealButton: {
        backgroundColor: "#82cfe8",
        padding: 10
    },
    user__buttonGroup:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10
    },
    user__button:{
        alignSelf: 'center',
        backgroundColor: "#dfe0f0",
        paddingVertical: 10,
        width: "45%",
    },
    user__selectButton:{
        alignSelf: 'center',
        backgroundColor: "#f04a60",
        paddingVertical: 10,
        width: "45%",
    },
    user__buttonText:{
        textAlign: 'center',
        fontSize: 18
    }
});

const mapStateToProps = state => {
    return{
        profile: state.profile.userData,
        dealsList: state.profile.dealsList,
        userLoading: state.profile.userLoading,
        dealsLoading: state.profile.dealsLoading
    }
}

export default connect(mapStateToProps, { getUser, getUserProfileDeals })(UserProfile);