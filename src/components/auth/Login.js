import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeUserEmail, changeUserPassword, loginUser } from '../../actions/index';

class Login extends Component{
    constructor() {
        super();
        this.state = {
          token: '',
          error: '',
          loading: false
        };
    }

    changeEmail(text){
        this.props.changeUserEmail(text);
    }

    changePassword(text){
        this.props.changeUserPassword(text);
    }

    pressLogin(){
        this.setState({loading: true});

        const userData = {
            email: this.props.email,
            password: this.props.password
        }

        this.props.loginUser(userData);
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
                <Text style={errorMessage}>{this.state.error}</Text>
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
                
                {this.state.loading ? <Spinner /> : loginButtons}
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
        password: state.auth.password
    }
}

export default connect(mapStateToProps, { changeUserEmail, changeUserPassword, loginUser })(Login);