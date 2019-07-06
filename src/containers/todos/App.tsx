import * as React from 'react';

import TodoForm from '../../components/todos/TodoForm';
import TodoList from '../../components/todos/TodoList';

export default function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}
