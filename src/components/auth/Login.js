import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeUserEmail, changeUserPassword, loginUser } from '../../actions/index';

class Login extends Component{
    changeEmail(text){
        this.props.changeUserEmail(text);
    }

    changePassword(text){
        this.props.changeUserPassword(text);
    }

    pressLogin(){
        const userData = {
            email: this.props.email,
            password: this.props.password
        }

        this.props.loginUser(userData);
        this.setState({loading: false});
    }

    render(){
        const { login__button, errorMessage } = styles;

        const loginButtons = (
            <View>
                <TouchableOpacity style={login__button} onPress={() => this.pressLogin()}>
                    <Text style={styles.deals__name}>Enter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={login__button} onPress={() => Actions.main()}>
                    <Text style={styles.deals__name}>Go Back</Text>
                </TouchableOpacity>
            </View>
            
        );

        return (
            <View>
                <Text style={errorMessage}>{this.props.error}</Text>
                <Input
                    label="Email"
                    value={this.props.email}
                    placeholder="EX - name@mail.com"
                    keyboardType="email-address"
                    onChangeText = {this.changeEmail.bind(this)} />
                <Input
                    label="Password"
                    value={this.props.password}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText = {this.changePassword.bind(this)} />
                
                {this.props.loading ? <Spinner /> : loginButtons}
            </View>
        )
    }
}

const styles = {
    login__button:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    errorMessage:{
        textAlign: 'center',
        margin: 15,
        fontSize: 15,
        color: 'red'
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { changeUserEmail, changeUserPassword, loginUser })(Login);