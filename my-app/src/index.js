import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';


import { createStore, combineReducers, } from 'redux'
import { reducer as formReducer } from 'redux-form'


const reducers = {
  // ваши редюсеры
  form: formReducer     // В state все данные формы будут храниться в свойстве form
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
