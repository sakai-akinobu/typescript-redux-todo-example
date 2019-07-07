import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import TodoForm from '../../components/todos/TodoForm';
import TodoList from '../../components/todos/TodoList';
import {
  syncTitle,
  addTodo,
  toggleCompleted,
} from '../../ducks/todos/actionCreators';
import {Todo} from '../../ducks/todos/reducers';
import {Store} from '../../stores';

type Props = {
  title: string,
  todos: Todo[],
  actions: {
    syncTitle: typeof syncTitle,
    addTodo: typeof addTodo,
    toggleCompleted: typeof toggleCompleted,
  },
};

function App({title, todos, actions}: Props) {
  return (
    <div>
      <TodoForm
        title={title}
        syncTitle={actions.syncTitle}
        addTodo={actions.addTodo}
      />
      <TodoList
        todos={todos}
        toggleCompleted={actions.toggleCompleted}
      />
    </div>
  );
}

const mapStateToProps = (store: Store) => ({
  title: store.todos.title,
  todos: store.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    syncTitle: (title: string) => dispatch(syncTitle(title)),
    addTodo: (title: string) => dispatch(addTodo(title)),
    toggleCompleted: (id: number) => dispatch(toggleCompleted(id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
