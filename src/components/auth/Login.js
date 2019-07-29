import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeUserEmail, changeUserPassword, loginUser, clearInputs } from '../../actions/AuthActions';

class Login extends Component{
    componentDidMount(){
        this.props.clearInputs();
    }

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
        const { login, buttonGroup, buttonGroup__button, buttonGroup__text, errorMessage } = styles;

        const loginButtons = (
            <View style={buttonGroup}>
                <TouchableOpacity style={buttonGroup__button} onPress={() => this.pressLogin()}>
                    <Text style={buttonGroup__text}>Enter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonGroup__button} onPress={() => Actions.main()}>
                    <Text style={buttonGroup__text}>Go Back</Text>
                </TouchableOpacity>
            </View>
            
        );

        return (
            <View style={login}>
                <Input
                    label="Email"
                    value={this.props.email}
                    placeholder="EX - name@mail.com"
                    keyboardType="email-address"
                    onChangeText = {this.changeEmail.bind(this)} />
                <Text style={errorMessage}>{this.props.error.email}</Text>
                <Input
                    label="Password"
                    value={this.props.password}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText = {this.changePassword.bind(this)} />
                <Text style={errorMessage}>{this.props.error.password}</Text>
                
                {this.props.loading ? <Spinner /> : loginButtons}
            </View>
        )
    }
}

const styles = {
    login:{
        marginTop: 30
    },
    buttonGroup:{
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    buttonGroup__button:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        paddingVertical: 12,
        width: "45%",
        marginVertical: 10
    },
    buttonGroup__text:{
        textAlign: 'center',
        fontSize: 17
    },
    errorMessage:{
        marginLeft: 5,
        fontSize: 15,
        color: 'red'
    },
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { changeUserEmail, changeUserPassword, loginUser, clearInputs })(Login);