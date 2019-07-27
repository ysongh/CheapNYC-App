import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeUserName, changeUserEmail, changeUserPassword, changeUserConfirmPassword, registerUser } from '../../actions/index';


class Register extends Component{
    changeName(text){
        this.props.changeUserName(text);
    }

    changeEmail(text){
        this.props.changeUserEmail(text);
    }

    changePassword(text){
        this.props.changeUserPassword(text);
    }

    changeConfirmPassword(text){
        this.props.changeUserConfirmPassword(text);
    }

    pressRegister(){
        const userData = {
            name: this.props.name,
            email: this.props.email,
            password: this.props.password,
            confirmPassword: this.props.confirmPassword
        }
        this.props.registerUser(userData);
    }

    render(){
        const { register, register__button, errorMessage } = styles;

        const registerButtons = (
            <View>
                <TouchableOpacity style={register__button} onPress={() => this.pressRegister()}>
                    <Text style={styles.deals__name}>Enter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={register__button} onPress={() => Actions.main()}>
                    <Text style={styles.deals__name}>Go Back</Text>
                </TouchableOpacity>
            </View>
            
        );

        return (
            <View style={register}>
                <Input
                    label="Name"
                    value={this.props.name}
                    placeholder="EX - Joe Doe"
                    onChangeText = {this.changeName.bind(this)} />
                <Text style={errorMessage}>{this.props.error.email}</Text>
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
                <Input
                    label="Confirm Password"
                    value={this.props.confirmPassword}
                    placeholder="Confirm Password"
                    secureTextEntry
                    onChangeText = {this.changeConfirmPassword.bind(this)} />
                <Text style={errorMessage}>{this.props.error.password}</Text>
                
                {this.props.loading ? <Spinner /> : registerButtons}
            </View>
        )
    }
}

const styles = {
    register:{
        marginTop: 30
    },
    register__button:{
        alignSelf: 'center',
        backgroundColor: "#82cfe8",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    },
    errorMessage:{
        marginLeft: 5,
        fontSize: 15,
        color: 'red'
    }
}

const mapStateToProps = state => {
    return{
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
        confirmPassword: state.auth.confirmPassword,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, { changeUserName, changeUserEmail, changeUserPassword, changeUserConfirmPassword, registerUser })(Register);