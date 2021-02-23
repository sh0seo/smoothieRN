import React,{ useContext, useEffect } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { UserContext } from '~/contexts/User';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.View`
  width: 100%;
  padding: 40px;
`;
const PasswordReset = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;

interface Props {
  navigation: NavigationProp;
}

const Login = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Input style={{marginBottom: 16}} placeholder="email" />
        <Input 
          style={{marginBottom: 16}}
          placeholder="password"
          secureTextentry={true}
        />
        <Button 
          style={{marginBottom: 24}}
          label="login"
          onPress={() => {
            login('dev.yakuza@gmail.com', 'password');
          }}
        />
        <PasswordReset
          onPress={() => {
            Linking.openURL('https://dev-yakuza.github.io/ko/');
          }}>
          Reset Password
        </PasswordReset>
      </FormContainer>
    </Container>
  );
};

export default Login;
