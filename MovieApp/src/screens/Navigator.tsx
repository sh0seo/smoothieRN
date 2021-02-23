import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { UserContext } from '~/contexts/User';
import Loading from './Loading';

const Navigator = () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {userInfo ? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}

export default Navigator;
