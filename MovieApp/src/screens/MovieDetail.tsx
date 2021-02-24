import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BigCatalog from '~/components/BigCatalog';
import Loading from './Loading';
import CastList from './MovieDetail/CastList';
import ScreenShotList from './MovieDetail/ScreenShotList';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;
const ContainerTitle = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const DescriptionContainer = styled.View``;
const Description = styled.Text`
  padding: 0 16px;
  color: #FFFFFF;
`;
const SubInfoContainer = styled.View``;
const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
const LabelInfo = styled.Text`
  color: #FFFFFF;
`;

type ProfileScreenRouteProp = RouteProp<MovieNaviParamList, 'MovieDetail'>;

interface Props {
  route: ProfileScreenRouteProp;
}

const MovieDetail = ({route}: Props) => {
  const [data, setData] = useState<IMovieDetail>();

  useEffect(() => {
    const {id} = route.params;
    fetch(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_image=true&with_cast=true`,)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.movie);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return data ? (
    <Container>
      <BigCatalog 
        id={data.id}
        image={data.large_cover_image}
        year={data.year}
        title={data.title}
        genres={data.genres}
      />
      <SubInfoContainer>
      </SubInfoContainer>
      <DescriptionContainer>
        <ContainerTitle>Story</ContainerTitle>
        <Description>{data.description_full}</Description>
      </DescriptionContainer>
      {data.cast && <CastList cast={data.cast} />} 
      <ScreenShotList 
        images={[
          data.large_screenshot_image1,
          data.large_screenshot_image2,
          data.large_screenshot_image3,
        ]}
      />
    </Container>
  ) : (
    <Loading />
  );
};

export default MovieDetail;
