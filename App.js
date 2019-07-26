import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './src/reducers';
import Router from './src/components/Router';
import Footer from './src/components/Footer';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Router />
        <Footer />
      </View>
    </Provider>
    
  );
}

export default App;