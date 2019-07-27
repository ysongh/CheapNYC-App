import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Input from '../common/Input';
import Spinner from '../common/Spinner';
import { changeUserEmail, changeUserPassword } from '../../actions/index';


class Register extends Component{
    changeEmail(text){
        this.props.changeUserEmail(text);
    }

    changePassword(text){
        this.props.changeUserPassword(text);
    }

    pressRegister(){
        console.log("Register");
    }

    render(){
        const { register, register__button, errorMessage } = styles;

        const registerButtons = (
            <View>
                <TouchableOpacity style={register__button} onPress={() => this.pressregister()}>
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
                    placeholder="EX - Joe Doe"/>
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
                    placeholder="Confirm Password"
                    secureTextEntry />
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
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, { changeUserEmail, changeUserPassword })(Register);