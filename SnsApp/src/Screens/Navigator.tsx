import React,{ useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { UserContext } from '~/Context/User';
import Loading from './Loading';

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

  if (isLoading === false) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {/* {userInfo ? <} */}
    </NavigationContainer>
  );
}
