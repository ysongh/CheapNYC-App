import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Footer = () => {
    const {footer, footer__button} = styles;

    const loginButton = (
        <TouchableOpacity style={styles.footer__button} onPress={() => Actions.auth()}>
            <Text style={styles.deals__name}>Login</Text>
        </TouchableOpacity>
    );

    const logoutButton = (
        <TouchableOpacity style={styles.footer__button} onPress={() => this.pressLogout()}>
            <Text style={styles.deals__name}>Logout</Text>
        </TouchableOpacity>
    );

    const DealsButton = (
        <TouchableOpacity style={styles.footer__button} onPress={() => Actions.deals()}>
            <Text style={styles.deals__name}>Deals</Text>
        </TouchableOpacity>
    );

    return (
        <View style={footer}>
            {DealsButton}
            {tokenG ? logoutButton : loginButton}
        </View>
    );
};

const styles = {
    footer:{
        padding: 27,
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

export default Footer;