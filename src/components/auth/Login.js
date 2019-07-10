import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Input from '../common/Input';

class Login extends Component{
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          token: '',
          error: ''
        };
    }

    pressLogin(){
        let url = "https://cnycserver.herokuapp.com/users/login";
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if(data.success){
                this.setState({
                    token: data.token
                });
                tokenG = data.token;
                Actions.main();
            }
            else{
                this.setState({
                    error: "Something went wrong, try again"
                });
            }
            
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }

    render(){
        const { login__button, errorMessage } = styles;

        return (
            <View>
                <Text style={errorMessage}>{this.state.error}</Text>
                <Input
                    label="Email"
                    value={this.state.email}
                    placeholder="Email"
                    onChangeText = {email => this.setState({ email })} />
                <Input
                    label="Password"
                    value={this.state.password}
                    placeholder="Password"
                    onChangeText = {password => this.setState({ password })} />
                <TouchableOpacity style={login__button} onPress={() => this.pressLogin()}>
                    <Text style={styles.deals__name}>Enter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={login__button} onPress={() => Actions.main()}>
                    <Text style={styles.deals__name}>Go Back</Text>
                </TouchableOpacity>
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

export default Login;