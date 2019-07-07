import * as React from 'react';

import {removeCompletedTodos} from '../../ducks/todos/actionCreators';

type Props = {
  removeCompletedTodos: typeof removeCompletedTodos,
};

export default function RemoveCompletedButton(props: Props) {
  return (
    <button onClick={props.removeCompletedTodos}>
      Remove completed todos
    </button>
  );
}
