import React,{ useContext } from 'react';
import { Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import { UserContext } from '~/contexts/User';

import Loading from '~/components/Loading';

import Login from '~/screens/Login';
import Signup from '~/screens/Signup';
import PasswordReset from '~/screens/PasswordReset';

import CustomDrawer from '~/screens/Drawer';
import MyFeed from '~/screens/MyFeed';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const MyFeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MyFeed" 
        component={MyFeed}
        options={{title: 'SNS App'}}
      />
    </Stack.Navigator>
  );
}

const MainTabs = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{showLabel: false}}>
      <BottomTab.Screen 
        name="MyFeed" 
        component={MyFeedTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/assets/images/tabs/ic_home.png')
                : require('~/assets/images/tabs/ic_home_outline.png')
              }
            />
          ), 
        }}
      />
    </BottomTab.Navigator> 
  );
};

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      drawerContent={(props) => <CustomDrawer props={props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {userInfo ? <MainNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
