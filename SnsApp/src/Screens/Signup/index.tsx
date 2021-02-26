/**
 * p343. Signup.tsx.
 */
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Tab from '~/components/Tab';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const FormContainer = styled.View``;
const Description = styled.Text``;
const TabContainer = styled.View``;
const Footer = styled.View``;
const FooterDescription = styled.Text``;
const GoBack = styled.Text``; 

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Signup'>;

interface Props {
  navigation: NavigationProp;
}

const Signup = ({navigation}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabs = ['number', 'email'];

  return (
    <Container>
      <FormContainer>
        <TabContainer>
          {
            tabs.map((label: string, index: number) => (
              <Tab
                key={`tab-${index}`}
                _selected={tabIndex === index}
                _label={label}
                _onPress={() => setTabIndex(index)}
              />
            ))
          }
        </TabContainer>
        <Input 
          style={{marginBottom: 16}}
          placeholder={tabIndex === 0 ? 'number' : 'email'}
        />
        <Button label="next" style={{marginBottom: 24}} />
        {
          tabIndex === 0 && (
            <Description>
              SNS App, email, recevied, cancel
            </Description>
          )
        }
      </FormContainer>
      <Footer>
        <FooterDescription>
          exist account?{' '}
          <GoBack onPress={() => navigation.goBack()}>Login</GoBack>
        </FooterDescription>
      </Footer>
    </Container>
  );
};

export default Signup;
