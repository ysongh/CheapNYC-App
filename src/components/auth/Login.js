import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';

class Login extends Component{
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          token: '',
          error: '',
          loading: false
        };
    }

    pressLogin(){
        this.setState({loading: true});
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
                    error: "Something went wrong, try again",
                    loading: false
                });
            }
            
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message);
            this.setState({loading: false});
        });
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
                    value={this.state.email}
                    placeholder="EX - name@mail.com"
                    keyboardType="email-address"
                    onChangeText = {email => this.setState({ email })} />
                <Input
                    label="Password"
                    value={this.state.password}
                    placeholder="Password"
                    keyboardType="visbile-password"
                    secureTextEntry
                    onChangeText = {password => this.setState({ password })} />
                
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

export default Login;