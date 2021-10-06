import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reducer from "./redux/reducer";
import { Provider } from 'react-redux';
import {createStore} from "redux";

const init = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  );
};

init();