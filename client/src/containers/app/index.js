import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import KanbanTitle from '../../components/KanbanTitle.js';
import Scrum from '../../components/Scrum.js';
import './styles.css';
import { connect } from 'react-redux';
//import ReduxThunk from 'redux-thunk';

//a react component
class App extends Component {
  constructor(){
    super();
    var oReq = new XMLHttpRequest();
    let reqListener = () => {
      console.log(oReq.response);
      let parse = JSON.parse(oReq.response);
      let queueDiv = {name:"IN QUEUE", cards: []};
      let progressDiv = {name:"IN PROGRESS", cards: []};
      let doneDiv = {name:"DONE", cards: []};

      for (let i=0; i < parse.length; ++i) {
        if(parse[i].status === "QUEUE"){
          queueDiv.cards.push(parse[i]);
        }else if(parse[i].status === "PROGRESS"){
          progressDiv.cards.push(parse[i]);
        }else if(parse[i].status === "DONE"){
          doneDiv.cards.push(parse[i]);
        }
      }
      console.log(queueDiv);

      this.setState({ cards: [queueDiv, progressDiv, doneDiv]
      });
    };
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', '/api/cards');
    oReq.send();
    this.title = 'Kanban';
    this.state = { cards: [] };
  }

  render() {
    return (
      <div className="App">
        <KanbanTitle
          title={this.title}>
        </KanbanTitle>
        <Scrum list={ this.state.cards } />
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