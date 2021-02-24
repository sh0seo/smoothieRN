/**
 * BigCatalogList.tsx
 */

import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import BigCatalog from '~/components/BigCatalog';

const Container = styled.View`
  height: 300px;
  margin-bottom: 8px;
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

export const BigCatalogList = ({url, onPress}: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.data.movies);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({item, index}) => (
          <BigCatalog 
            id={(item as IMovie).id}
            image={(item as IMovie).large_cover_image}
            year={(item as IMovie).year} 
            title={(item as IMovie).title}
            genres={(item as IMovie).genres}
            onPress={onPress}
          />
        )}
      />
    </Container> 
  );
};
