/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import styled from 'styled-components/native';
import Counter from '~/screens/counter';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <Container>
      <Counter initValue={5} />
    </Container>
  );
};

export default App;
