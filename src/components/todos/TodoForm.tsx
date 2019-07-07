import * as React from 'react';
import {useRef} from 'react';

import {
  syncTitle,
  addTodo,
} from '../../ducks/todos/actionCreators';

type Props = {
  title: string,
  syncTitle: typeof syncTitle,
  addTodo: typeof addTodo,
};

export default function TodoForm(props: Props) {
  const titleElement = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (titleElement.current) {
      props.addTodo(titleElement.current.value);
    }
  };

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    props.syncTitle(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={titleElement}
        value={props.title}
        onChange={handleChange}
      />
      <input type="submit" value="add" />
    </form>
  );
}
