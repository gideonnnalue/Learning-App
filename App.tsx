import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import store from './store';

import MainNavigation from './navigation/MainNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
