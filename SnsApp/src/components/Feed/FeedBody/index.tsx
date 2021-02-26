/**
 * p360. FeedBody component.
 */
import React, { useState } from 'react'
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import IconButton from '~/components/IconButton';

const Container = styled.View``;
const ImageContainer = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  width: ${Dimensions.get('window').width}px;
  height: 400px;
`;
const FeedImageIndicatorContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FeedImageIndicator = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: 2px;
`;
const FeedMenuContainer = styled.View`
  flex-direction: row;
`;
const MenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

interface Props {
  id: number;
  images: Array<String>;
}

const FeedBody = ({id, images}: Props) => {
  const [indicatorIndex, setIndicatorIndex] = useState<number>(0);
  const imageLength = images.length;

  return (
    <Container>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={imageLength > 1}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          setIndicatorIndex(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
          );
        }}>
        {images.map((image, index) => (
          <ImageContainer key={`FeedImage-${id}-${index}`}>
            <Image 
              source={{uri: image as string}}
              style={{width: Dimensions.get('window').width, height: 400}}
            />
          </ImageContainer>
        ))}
      </ScrollView>
      <FeedMenuContainer>
        <MenuContainer>
          <IconButton iconName="favorite" />
          <IconButton iconName="comment" />
          <IconButton iconName="send" />
        </MenuContainer>
        <MenuContainer>
          <FeedImageIndicatorContainer>
            {imageLength > 1 &&
              images.map((image, index) => (
                <FeedImageIndicator 
                  key={`FeedImageIndicator-${id}-${index}`}
                  style={{
                    backgroundColor:
                      indicatorIndex >= index && indicatorIndex < index + 1
                      ? '#3796ef'
                      : '#d3d3d3',
                  }}
                />
              ))}
          </FeedImageIndicatorContainer>
        </MenuContainer>
        <MenuContainer style={{justifyContent: 'flex-end'}}>
          <IconButton iconName="bookmark" />
        </MenuContainer>
      </FeedMenuContainer>
    </Container>
  );
};

export default FeedBody;
