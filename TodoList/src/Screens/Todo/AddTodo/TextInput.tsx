import React, { useContext } from 'react';
import styled from 'styled-components/native';

import {TodoListContext} from '~/context/TodoListContext';

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 0px 8px;
`;

interface Props {
  hideTodoInput: () => void;
}

const TextInput = ({hideTodoInput}: Props) => {
  const {addTodoList} = useContext<ITodoListConext>(TodoListContext);

  return (
    <Input
      autoFocus={true}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="iput work"
      returnKeyType="done"
      onSubmitEditing={(nativeEvent) => {
        addTodoList(nativeEvent.text);
        hideTodoInput();
      }}
    />
  );
};

export default TextInput;
