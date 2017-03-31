import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import KanbanTitle from '../../components/KanbanTitle.js';
import KanbanDummyList from '../../components/KanbanDummyList.js';
import './styles.css';
import { connect } from 'react-redux';
//import ReduxThunk from 'redux-thunk';

// a react component
class App extends Component {
  constructor(){
    super();
    var oReq = new XMLHttpRequest();
    let reqListener = () => {
      console.log(oReq.response);
      this.setState({ cards: JSON.parse(oReq.response)
      });
    };
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', '/api/cards');
    oReq.send();
    this.title = 'Kanban';
    this.state = { cards: [] };
  }

  doClick = () => {
    console.log( this.title);
  }

  render() {
    return (
      <div className="App">
        <KanbanTitle
          title={this.title}>
        </KanbanTitle>
          <KanbanDummyList list={ this.state.cards }>
        </KanbanDummyList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (title, priority, status, createdBy, assignedTo) => {
      /*dispatch(addCard(title, priority, status, createdBy, assignedTo));*/
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);