/**
 * p337. PaswordRest.tsx.
 */

import React, { useState } from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Tab from '~/components/Tab';

const Container = styled.SafeAreaView``;
const FormContainer = styled.View``;
const LockImageContainer = styled.View``;
const LockImage = styled.Image``;
const Title = styled.Text``;
const Description = styled.Text``;
const TabContainer = styled.View``;
const HelpLabel = styled.View``;
const Footer = styled.View``;
const GoBack = styled.Text``;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'PasswordReset'>;
interface Props {
  _navigation: NavigationProp;
}

const PasswordReset = ({_navigation}: Props) => {
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
        <GoBack onPress={() => _navigation.goBack()}>Back Login</GoBack>
      </Footer>
    </Container>
  );
};

export default PasswordReset;
