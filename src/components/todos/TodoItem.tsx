import * as React from 'react';

import {Todo} from '../../ducks/todos/reducers';
import {toggleCompleted} from '../../ducks/todos/actionCreators';

type Props = {
  todo: Todo,
  toggleCompleted: typeof toggleCompleted,
};

export default function TodoItem(props: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.toggleCompleted(props.todo.id)}
      />
      <span>{props.todo.title}</span>
    </li>
  );
}
