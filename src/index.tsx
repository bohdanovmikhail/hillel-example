import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

import { Root } from './pages/Root';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
