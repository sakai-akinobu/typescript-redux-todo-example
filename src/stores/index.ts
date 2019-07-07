import {
  createStore as _createStore,
  combineReducers,
} from 'redux';

import {reducer as todos} from '../ducks/todos/reducers';

const combinedReducer = combineReducers({
  todos,
});

export type Store = ReturnType<typeof combinedReducer>;

export function createStore() {
  return _createStore(combinedReducer);
}
