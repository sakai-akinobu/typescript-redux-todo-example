import * as React from 'react';

import {Todo} from '../../ducks/todos/reducers';
import TodoItem from './TodoItem';
import {toggleCompleted} from '../../ducks/todos/actionCreators';

type Props = {
  todos: Todo[],
  toggleCompleted: typeof toggleCompleted,
};

export default function TodoList(props: Props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </ul>
  );
}
