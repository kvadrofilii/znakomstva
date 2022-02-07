import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/*</BrowserRouter>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
