import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/index';

class Footer extends Component{
    pressLogout(){
        this.props.logoutUser();
    }

    render(){
        const {footer, footer__button} = styles;

        const loginButton = (
            <TouchableOpacity style={footer__button} onPress={() => Actions.auth()}>
                <Text style={styles.deals__name}>Login</Text>
            </TouchableOpacity>
        );

        const logoutButton = (
            <TouchableOpacity style={footer__button} onPress={() => this.pressLogout()}>
                <Text style={styles.deals__name}>Logout</Text>
            </TouchableOpacity>
        );

        const DealsButton = (
            <TouchableOpacity style={footer__button} onPress={() => Actions.deals()}>
                <Text style={styles.deals__name}>Deals</Text>
            </TouchableOpacity>
        );

        return (
            <View style={footer}>
                {DealsButton}
                {this.props.token ? logoutButton : loginButton}
            </View>
        );
    }
};

const styles = {
    footer:{
        padding: 20,
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    footer__button:{
        alignSelf: 'flex-end',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10
    }   
}

const mapStateToProps = state => {
    return{
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { logoutUser })(Footer);