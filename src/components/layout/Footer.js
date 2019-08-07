import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/AuthActions';

class Footer extends Component{
    pressLogout(){
        this.props.logoutUser();
    }

    render(){
        const {footer, footer__button} = styles;

        const DealsButton = (
            <TouchableOpacity style={footer__button} onPress={() => Actions.deals()}>
                <Text style={styles.deals__name}>Deals</Text>
            </TouchableOpacity>
        );

        const guestButtons = (
            <View style={footer}>
                {DealsButton}
                <TouchableOpacity style={footer__button} onPress={() => Actions.register()}>
                    <Text style={styles.deals__name}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={footer__button} onPress={() => Actions.login()}>
                    <Text style={styles.deals__name}>Login</Text>
                </TouchableOpacity>
            </View>
        );

        const userButtons = (
            <View style={footer}>
                {DealsButton}
                <TouchableOpacity style={footer__button} onPress={() => this.pressLogout()}>
                    <Text style={styles.deals__name}>Logout</Text>
                </TouchableOpacity>
            </View>
            
        );

        return (
            <View>
                {this.props.token ? userButtons : guestButtons}
            </View>
        );
    }
};

const styles = {
    footer:{
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    footer__button:{
        backgroundColor: "#f0f2f5",
        paddingHorizontal: 15,
        paddingVertical: 20
    }   
}

const mapStateToProps = state => {
    return{
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { logoutUser })(Footer);