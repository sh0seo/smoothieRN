/**
 * p341. Tab.tsx.
 */
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity``;
const Label = styled.Text``;
const TabImage = styled.Image``;

interface Props {
  _selected: boolean;
  _label?: string;
  _imageSource?: ImageSourcePropType;
  _onPress?: () => void;
}

const Tab = ({
  _selected,
  _label,
  _imageSource,
  _onPress
}: Props) => {
  let color: string = _selected ? '#292929' : '#929292';
  return (
    <Container
      activeOpacity={1}
      style={{borderColor: color}}
      onPress={_onPress}>
      {_label && <Label style={{color: color}}>{_label}</Label>}
      {_imageSource && <TabImage source={_imageSource} />}
    </Container>
  );
}

export default Tab;
