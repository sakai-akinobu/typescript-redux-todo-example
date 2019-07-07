import {types} from './actions';

export function syncTitle(title: string) {
  return {
    type: types.SYNC_TITLE,
    payload: {title},
  };
}

export function addTodo(title: string) {
  return {
    type: types.ADD_TODO,
    payload: {title},
  };
}

export function toggleCompleted(id: number) {
  return {
    type: types.TOGGLE_COMPLETED,
    payload: {id},
  };
}

export function removeCompletedTodos() {
  return {
    type: types.REMOVE_COMPLETED_TODOS,
  };
}
