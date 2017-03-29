import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/app';
import './index.css';

// avoid importing

const ADD_CARD = 'ADD_CARD';

const initialState = {
  cards: []
}

function cards(state = initialState, action){
  switch(action.type) 
{    case ADD_CARD:
      return Object.assign({}, state, {
        cards: [
          // "spread operator"
          ...state.cards,
          {
            title: action.title,
            priority: action.priority,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo
          }
        ]
      });
    default:
      return state;
  }
}

// avoid importing

const store = createStore(cards);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);