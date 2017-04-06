import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Header from '../../components/Header.js';
import Scrum from '../../components/Scrum.js';
import './styles.css';
import { connect } from 'react-redux';
import { addCard } from '../actions'
//import ReduxThunk from 'redux-thunk';

//a react component
class App extends Component {
  constructor(){
    super();
    this.title = 'this title thing';
    this.state = {
      cards: [],
      value: ''
    };

    var oReq = new XMLHttpRequest();

    let reqListener = () => {
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

      this.setState({
        cards: [queueDiv, progressDiv, doneDiv]
      });
    };

    oReq.addEventListener('load', reqListener);
    oReq.open('GET', '/api/cards');
    oReq.send();
  }

  render() {
    return (
      <div className="App">
        <Header title={this.title} />
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);