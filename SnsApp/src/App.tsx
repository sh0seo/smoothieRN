/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import SplashScrren from 'react-native-splash-screen';
import Navigator from '~/Screens/Navigator';

interface Props {};

const App = ({}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScrren.hide();
    }, 1000);
  }, []);
  return (
    <>
      <StatusBar barStyle="default" />
      <Navigator />
    </>
  );
};

export default App;
