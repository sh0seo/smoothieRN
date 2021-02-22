import React from 'react';
import styled from 'styled-components/native';
import AddTodo from './AddTodo';
import TodoListView from './TodoListView';

const Container = styled.View`
  flex: 1;
`;

interface Props {}

const Todo = ({}: Props) => {
    return (
      <Container>
        <TodoListView />
        <AddTodo />
      </Container>
    );
};

export default Todo;
