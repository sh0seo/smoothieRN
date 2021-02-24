import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import styled from 'styled-components/native';
import SubCatalogList from '~/components/SubCatalogList';
import { UserContext } from '~/contexts/User';
import { BigCatalogList } from './MovieHome/BigCatalogList';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;
const StyleButton = styled.Pressable`
  padding: 8px;
`;
const Icon = styled.Image``;

type NavigationProp = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;

interface Props {
  navigation: NavigationProp;
}

const MovieHome = ({navigation}: Props) => {
  const {logout} = useContext<IUserContext>(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <StyleButton
          onPress={() => {
            logout();
          }}>
          <Icon source={require('~/assets/images/ic_logout.png')} />
        </StyleButton>
      ),
    });
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Container>
      <BigCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="Lasted"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="Liked"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="Download"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container>
  );
}

export default MovieHome;
