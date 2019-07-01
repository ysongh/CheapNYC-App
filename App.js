import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Header from './src/components/Header'
import Deals from './src/components/Deals';
import Deal from './src/components/Deal';

export default class App extends Component{
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Deals />
      </View>
    );
  }
}