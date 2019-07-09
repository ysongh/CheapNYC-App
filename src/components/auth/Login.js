import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component{
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          token: ''
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
        .then((data) => {
            console.log(data)
            this.setState({
                token: data.token
            });
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
        });
    }

    render(){
        const { login__input, login__button } = styles;

        return (
            <View>
                <TextInput
                    value={this.state.email}
                    placeholder="Email"
                    onChangeText = {email => this.setState({ email })}
                    style={login__input}/>
                <TextInput
                    value={this.state.password}
                    placeholder="Password"
                    onChangeText = {password => this.setState({ password })}
                    style={login__input}/>
                <TouchableOpacity style={login__button} onPress={() => this.pressLogin()}>
                    <Text style={styles.deals__name}>Enter</Text>
                </TouchableOpacity>
                <Text>{this.state.token}</Text>
            </View>
        )
    }
}

const styles = {
    login__input:{
        height: 40,
        width: '100%',
        backgroundColor: 'yellow',
        marginBottom: 5
    },
    login__button:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10,
    },
}

export default Login;