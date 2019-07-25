import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeEmail} from '../../actions/index';

class Login extends Component{
    constructor() {
        super();
        this.state = {
          password: '',
          token: '',
          error: '',
          loading: false
        };
    }

    onChangeEmail(text){
        this.props.changeEmail(text);
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
                    value={this.props.email}
                    placeholder="EX - name@mail.com"
                    keyboardType="email-address"
                    onChangeText = {this.onChangeEmail.bind(this)} />
                <Input
                    label="Password"
                    value={this.state.password}
                    placeholder="Password"
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

const mapStateToProps = state => {
    return{
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { changeEmail })(Login);