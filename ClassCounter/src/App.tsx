/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import Counter from './components/Counter';

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const App = () => {
  return (
    <Container>
      <Counter title="Counter" initValue={0} />
    </Container>
  );
};

export default App;
