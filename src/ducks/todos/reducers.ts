import produce from 'immer';

import * as actionCreators from './actionCreators';
import {ActionCreatorsToActions} from '../../types';
import {types} from './actions';

export type Todo = {
  id: number,
  title: string,
  completed: boolean,
};

export type State = {
  title: string,
  todos: Todo[],
};

const initialState: State = {
  title: '',
  todos: [],
};

let todoId = 1;

type Actions = ActionCreatorsToActions<typeof actionCreators>;

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case types.SYNC_TITLE:
      return produce(state, draft => {
        draft.title = action.payload.title;
      });
    case types.ADD_TODO:
      return produce(state, draft => {
        draft.todos.push({
          id: todoId++,
          title: action.payload.title,
          completed: false,
        });
        draft.title = '';
      });
    case types.TOGGLE_COMPLETED:
      return produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === action.payload.id);
        if (todo === undefined) {
          throw new Error(`Unexpected todo.id was found. id:${action.payload.id}`);
        } else {
          todo.completed = !todo.completed;
        }
      });
    default:
      return state;
  }
}
