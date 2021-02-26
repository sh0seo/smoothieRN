/**
 * p356. IconButton component.
 */
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable`
  padding: 8px;
`;
const Icon = styled.Image``;

interface Props {
  iconName: 
    | 'camera' 
    | 'live' 
    | 'send'
    | 'dotMenu'
    | 'favorite'
    | 'comment'
    | 'bookmark'
    | 'menu';
  style?: object;
  onPress?: () => void;
}

const IconButton = ({iconName, style, onPress}: Props) => {
  const imageSource = {
    camera: require('~/assets/images/ic_camera.png'),
    live: require('~/assets/images/ic_live.png'),
    send: require('~/assets/images/ic_send.png'),
    dotMenu: require('~/assets/images/ic_dot_menu.png'),
    favorite: require('~/assets/images/tabs/ic_favorite_outline.png'),
    comment: require('~/assets/images/ic_comment.png'),
    bookmark: require('~/assets/images/ic_bookmark.png'),
    menu: require('~/assets/images/ic_menu.png'),
  };

  return (
    <Container
      style={style}
      onPress={() => {
        if (onPress && typeof onPress === 'function') {
          onPress();
        }
      }}>
      <Icon source={imageSource[iconName]} />
    </Container>
  );
};

export default IconButton;
