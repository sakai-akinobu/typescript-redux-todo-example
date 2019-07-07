import {
  createStore as _createStore,
  combineReducers,
} from 'redux';

import {reducer as todos} from '../ducks/todos/reducers';

const combinedReducers = combineReducers({
  todos,
});

export function createStore() {
  return _createStore(combinedReducers);
}
