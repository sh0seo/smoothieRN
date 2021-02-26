import React,{useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import { UserContext } from '~/contexts/User';

import Input from '~/components/Input';
import Button from '~/components/Button';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`;
const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;
const Logo = styled.Text`
  color: #292929;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;
const PasswordReset = styled.Text`
  width: 100%;
  color: #3796ef;
  text-align: right;
  margin-bottom: 24px;
`;
const SignupText = styled.Text`
  color: #929292;
  text-align: center;
`;
const SignupLink = styled.Text`
  color: #3796ef;
`;
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`;
const Copyright = styled.Text`
  color: #929292;
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
        <Logo>SNS App</Logo>
        <Input style={{marginBottom: 16}} placeholder="email" />
        <Input 
          style={{marginBottom: 16}}
          placeholder="password"
          secureTextEntry={true}
        />
        <PasswordReset onPress={() => {
          navigation.navigate('PasswordReset')
        }}>
          Reset Password
        </PasswordReset>
        <Button 
          label="Login"
          style={{marginBottom: 24}}
          onPress={() => {
            login('dev.yakuza@gmail.com', 'password');
          }}
        />
        <SignupText>
          Not have account?{' '}
          <SignupLink onPress={() => navigation.navigate('Signup')}>
            Join
          </SignupLink>
        </SignupText>
      </FormContainer>
      <Footer>
        <Copyright>SNSApp from sh0seo</Copyright>
      </Footer>
    </Container>
  );
}

export default Login;
