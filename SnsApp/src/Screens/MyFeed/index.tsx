/**
 *  p346. MyFeed
 */
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import {FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/components/IconButton';
import Feed from '~/components/Feed';
import StoryList from '~/screens/StoryList';

const HeaderRightContainer = styled.View`
  flex-direction: row;
`;

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed'>;
interface Props {
  navigation: NavigationProp;
}

const MyFeed = ({navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const [storyList, setStoryList] = useState<Array<IFeed>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconButton iconName="camera" />,
      headerRight: () => (
        <HeaderRightContainer>
          <IconButton iconName="live" />
          <IconButton iconName="send" />
        </HeaderRightContainer>
      ),
    });
  }, []);

  useEffect(() => {
    setFeedList(getMyFeed());
    setStoryList(getMyFeed());
    SplashScreen.hide();
  }, []);

  return (
    <FlatList
      data={feedList}
      keyExtractor={(item, index) => {
        return `myfeed-${index}`;
      }}
      showsVerticalScrollIndicator={false}
      onRefresh={() => {
        setLoading(true);
        setTimeout(() => {
          setFeedList(getMyFeed());
          setStoryList(getMyFeed());
          setLoading(false);
        }, 2000);
      }}
      onEndReached={() => {
        setFeedList([...feedList, ...getMyFeed()]);
      }}
      refreshing={loading}
      ListHeaderComponent={<StoryList storyList={storyList} />}
      renderItem={({item, index}) => (
        <Feed 
          id={index}
          name={item.name}
          photo={item.photo}
          description={item.description}
          images={item.images}
        />
      )}
    >
    </FlatList>
  );
};

export default MyFeed;
