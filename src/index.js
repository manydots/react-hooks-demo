import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from "redux-react-hook";
import { store } from "./redux/store";
import App from '@/router/router';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();