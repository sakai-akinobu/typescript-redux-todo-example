import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import {createStore} from './stores'
import App from './containers/todos/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app") as HTMLElement,
);
