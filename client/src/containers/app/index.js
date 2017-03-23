import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { bookList } from './data.js';

class App extends Component {
  constructor(){
    super();
    this.title = 'Kanban';
    this.bookList = { bookList };
  }

  doClick = () => {
    console.log( this.title );
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle
          title={this.title}
          doClick={this.doClick}
        />
        <BookListAppSearch/>
        <BookListAppList
          list={ bookList }
        />
      </div>
    );
  }
}

export default App;