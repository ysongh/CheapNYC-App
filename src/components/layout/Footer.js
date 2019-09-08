import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Button from '../common/Button';
import { logoutUser } from '../../actions/AuthActions';

class Footer extends Component{
    pressLogout(){
        this.props.logoutUser();
    }

    render(){
        const {footer, footer__button} = styles;

        const DealsButton = (
            <Button
                buttonStyle={footer__button}
                value="Deals"
                onPress={() => Actions.main()} />
        );

        const guestButtons = (
            <View style={footer}>
                {DealsButton}
                <Button
                    buttonStyle={footer__button}
                    value="Register"
                    onPress={() => Actions.register()} />
                <Button
                    buttonStyle={footer__button}
                    value="Login"
                    onPress={() => Actions.login()} />
            </View>
        );

        const userButtons = (
            <View style={footer}>
                {DealsButton}
                <Button
                    buttonStyle={footer__button}
                    value="Profile"
                    onPress={() => Actions.yourProfile({userId: this.props.user.id})} />
                <Button
                    buttonStyle={footer__button}
                    value="Add Deal"
                    onPress={() => Actions.addDeal()} />
                <Button
                    buttonStyle={footer__button}
                    value="Logout"
                    onPress={() => this.pressLogout()} />
            </View>
        );

        return (
            <View>
                {!this.props.token ? userButtons : guestButtons}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    footer:{
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    footer__button:{
        backgroundColor: "#f0f2f5",
        paddingHorizontal: 15,
        paddingVertical: 20
    }   
});

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { logoutUser })(Footer);