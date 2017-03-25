import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import KanbanTitle from '../../components/KanbanTitle.js';
import KanbanDummyList from '../../components/KanbanDummyList.js';
import './styles.css';

class App extends Component {
  constructor(){
    super();
    var oReq = new XMLHttpRequest();
    let reqListener = () => {
      this.setState({ cards: JSON.parse(oReq.responseText) })
    }
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', 'http://localhost:9000/api/cards');
    oReq.send();
    this.title = 'Kanban';
    this.state = { cards: [] };
  }

  doClick = () => {
    console.log( this.title );
  }

  render() {
    return (
      <div className="App">
        <KanbanTitle
          title={this.title}
        />
        <KanbanDummyList
        list={ this.state.cards }/>
      </div>
    );
  }
}

export default App;