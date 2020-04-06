import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
