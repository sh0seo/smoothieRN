import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable``;
const Icon = styled.Image``;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName === 'plus'
            ? require('~/assets/images/add.png')
            : require('~/assets/images/remove.png')
        }
      />
    </Container>
  );
};

export default Button;
