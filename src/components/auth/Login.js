import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Login extends Component{
    constructor() {
        super();
        this.state = {
          email: '',
          password: ''
        };
    }
    render(){
        const { login__input } = styles;

        return (
            <View>
                <TextInput
                    value={this.state.email}
                    placeholder="Email"
                    onChangeText = {email => this.setState({ email })}
                    style={login__input}/>
                <Text>{this.state.email}</Text>
                <TextInput
                    value={this.state.password}
                    placeholder="Password"
                    onChangeText = {password => this.setState({ password })}
                    style={login__input}/>
                <Text>{this.state.password}</Text>
            </View>
        )
    }
}

const styles = {
    login__input:{
        height: 40,
        width: '100%',
        backgroundColor: 'yellow'
    }
}

export default Login;