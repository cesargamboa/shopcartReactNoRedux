import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);

const app = (

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
