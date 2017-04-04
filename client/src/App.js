/*
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import logo from './logo.svg';
import { addCard } from './actions';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: book => {
      dispatch(addBook())
    }
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

// need to use connect if you want to connect to Redux store
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
*/