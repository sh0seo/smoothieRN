import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { UserContext } from '~/contexts/User';
import Loading from '~/screens/Loading';
import Login from '~/screens/Login';
import MovieHome from '~/screens/MovieHome';
import MovieDetail from "~/screens/MovieDetail";

const Stack = createStackNavigator();

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
