import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Router from './src/components/Router';

global.tokenG = "";

export default class App extends Component{
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    );
  }
}