/**
 * p397. Drawer
 */
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {UserContext} from '~/contexts/User';

const Header = styled.View`
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  padding: 8px 16px;
`;
const Title = styled.Text``;
const Button = styled.TouchableHighlight`
  padding: 8px 16px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.Image`
  margin-right: 8px;
`;
const Label = styled.Text`
  font-size: 16px;
`;
const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
`;

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({props}: Props) => {
  const {logout} = useContext<IUserContext>(UserContext);

  return (
    <DrawerContentScrollView {...props} >
      <Header>
        <Title>Sara Lambert</Title>
      </Header>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/assets/images/ic_camera.png')} />
          <Label>Photo</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/assets/images/ic_live.png')} />
          <Label>Live</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon source={require('~/assets/images/tabs/ic_favorite_outline.png')} />
          <Label>Follower</Label>
        </ButtonContainer>
      </Button>
      <Footer>
        <Button 
          onPress={() => {
            logout();
          }}>
          <ButtonContainer>
            <Icon source={require('~/assets/images/tabs/ic_profile_outline.png')} />
            <Title>Logout</Title>
          </ButtonContainer>
        </Button>  
      </Footer>
    </DrawerContentScrollView>
  );
};

export default Drawer;
