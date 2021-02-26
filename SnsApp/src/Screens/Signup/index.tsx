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
  background-color: #feffff;
`;
const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`;
const Description = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #929292;
  margin: 0px 8px;
`;
const TabContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`;
const FooterDescription = styled.Text`
  color: #929292;
  text-align: center;
`;
const GoBack = styled.Text`
  color: #3796ef;
`; 

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
