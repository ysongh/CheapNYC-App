import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeUserName, changeUserEmail, changeUserPassword, changeUserConfirmPassword, registerUser, clearInputs } from '../../actions/AuthActions';


class Register extends Component{
    componentDidMount(){
        this.props.clearInputs();
    }

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
        const { register, register__button, buttonGroup, buttonGroup__button, buttonGroup__text, errorMessage } = styles;

        const registerButtons = (
            <View style={buttonGroup}>
                <TouchableOpacity style={buttonGroup__button} onPress={() => this.pressRegister()}>
                    <Text style={styles.buttonGroup__text}>Enter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonGroup__button} onPress={() => Actions.main()}>
                    <Text style={styles.buttonGroup__text}>Go Back</Text>
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
                <Text style={errorMessage}>{this.props.error.name}</Text>
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
                <Text style={errorMessage}>{this.props.error.confirmPassword}</Text>
                
                {this.props.loading ? <Spinner /> : registerButtons}
            </View>
        )
    }
}

const styles = {
    register:{
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
    }
}

const mapStateToProps = state => {
    return{
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
        confirmPassword: state.auth.confirmPassword,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { changeUserName, changeUserEmail, changeUserPassword, changeUserConfirmPassword, registerUser, clearInputs })(Register);