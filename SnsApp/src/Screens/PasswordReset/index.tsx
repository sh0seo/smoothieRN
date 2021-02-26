/**
 * p337. PaswordRest.tsx.
 */

import React, { useState } from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Tab from '~/components/Tab';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`;
const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`;
const LockImageContainer = styled.View`
  padding: 24px;
  border-width: 2px;
  border-color: #292929;
  border-radius: 80px;
  margin-bottom: 24px;
`;
const LockImage = styled.Image``;
const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
`;
const Description = styled.Text`
  text-align: center;
  margin-bottom: 16px;
  color: #292929;
`;
const TabContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
const HelpLabel = styled.Text`
  color: #3796ef;
`;
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`;
const GoBack = styled.Text`
  color: #3796ef;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'PasswordReset'>;
interface Props {
  navigation: NavigationProp;
}

const PasswordReset = ({navigation}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabs = ['User Name', 'Phone'];
  const tabDescriptions = [
    'send link your email, if insert user name or email',
    'send access code, if insert phone',
  ];
  const placeholders = ['name or email', 'phone'];

  return (
    <Container>
      <FormContainer>
        <LockImageContainer>
          <LockImage source={require('~/assets/images/lock.png')} />
        </LockImageContainer>
        <Title>Have Login Problem</Title>
        <Description>{tabDescriptions[tabIndex]}</Description>
        <TabContainer>
          {tabs.map((label: string, index: number) => (
            <Tab 
              key={`tab-${index}`}
              _selected={tabIndex === index}
              _label={label}
              _onPress={() => setTabIndex(index)}
            />
          ))}
        </TabContainer>
        <Input 
          style={{marginBottom: 16}}
          placeholder={placeholders[tabIndex]}
        />
        <Button label="Next" style={{marginBottom: 24}} />
        <HelpLabel>need to help?</HelpLabel>
      </FormContainer>
      <Footer>
        <GoBack onPress={() => navigation.goBack()}>Back Login</GoBack>
      </Footer>
    </Container>
  );
};

export default PasswordReset;
