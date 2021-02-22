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
import { Text } from 'react-native';
import styled from 'styled-components/native';
import {TodoListContextProvider} from '~/context/TodoListContext';

import Todo from '~/Screens/Todo/Todo';

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    // <TodoListContextProvider>
      <Container>
        {/* <Text>Hello</Text> */}
        <Todo />
      </Container>
    // </TodoListContextProvider>
  );
};

export default App;
