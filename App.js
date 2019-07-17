import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Router from './src/components/Router';

global.tokenG = "";

const App = () => {
  return (
    <Provider store={createStore}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
    
  );
}

export default App;