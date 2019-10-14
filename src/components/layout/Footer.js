import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import ButtonWithIcon from '../common/ButtonWithIcon';
import { logoutUser } from '../../actions/AuthActions';

import footerIcon1 from '../../img/footerIcon1.png';
import footerIcon2 from '../../img/footerIcon2.png';
import footerIcon3 from '../../img/footerIcon3.png';
import footerIcon4 from '../../img/footerIcon4.png';
import footerIcon5 from '../../img/footerIcon5.png';
import footerIcon6 from '../../img/footerIcon6.png';

class Footer extends Component{
    pressLogout(){
        this.props.logoutUser();
    }

    render(){
        const { footer } = styles;
        const DealsButton = (
            <ButtonWithIcon
                icon={footerIcon1}
                value="Deals"
                onPress={() => Actions.main()} />
        );

        const guestButtons = (
            <View style={footer}>
                {DealsButton}
                <ButtonWithIcon
                    icon={footerIcon2}
                    value="Register"
                    onPress={() => Actions.register()} />
                <ButtonWithIcon
                    icon={footerIcon3}
                    value="Login"
                    onPress={() => Actions.login()} />
            </View>
        );

        const userButtons = (
            <View style={footer}>
                {DealsButton}
                <ButtonWithIcon
                    icon={footerIcon4}
                    value="Profile"
                    onPress={() => Actions.yourProfile({userId: this.props.user.id})} />
                <ButtonWithIcon
                    icon={footerIcon5}
                    value="Add Deal"
                    onPress={() => Actions.addDeal()} />
                <ButtonWithIcon
                    icon={footerIcon6}
                    value="Logout"
                    onPress={() => this.pressLogout()} />
            </View>
        );

        return (
            <View>
                {this.props.token ? userButtons : guestButtons}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    footer:{
        flexDirection: "row",
        justifyContent: 'space-around',
    }
});

const mapStateToProps = state => {
    return{
        token: state.auth.token,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { logoutUser })(Footer);