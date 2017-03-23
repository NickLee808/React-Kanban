import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import KanbanTitle from '../../components/KanbanTitle.js';
import KanbanDummyList from '../../components/KanbanDummyList.js';
import './styles.css';

var dummyCards = [
  {
  "id": 1,
  "title": "TESTCARD1",
  "priority": "LOW",
  "status": "aTESTCARD",
  "createdBy": null,
  "assignedTo": null,
  "createdAt": "2017-03-23T01:05:20.884Z",
  "updatedAt": "2017-03-23T01:05:20.884Z"
  },
  {
  "id": 2,
  "title": "TESTCARD2",
  "priority": "LOW",
  "status": "bTESTCARD",
  "createdBy": null,
  "assignedTo": null,
  "createdAt": "2017-03-23T01:06:19.325Z",
  "updatedAt": "2017-03-23T01:06:19.325Z"
  },
  {
  "id": 3,
  "title": "TESTCARD3",
  "priority": "LOW",
  "status": "cTESTCARD",
  "createdBy": null,
  "assignedTo": null,
  "createdAt": "2017-03-23T01:09:25.925Z",
  "updatedAt": "2017-03-23T01:09:25.925Z"
  }
]

class App extends Component {
  constructor(){
    super();
    this.title = 'Kanban';
    this.dummyCards = dummyCards;
  }

  doClick = () => {
    console.log( this.title );
  }

  render() {
    return (
      <div className="App">
        <KanbanTitle
          title={this.title}
          doClick={this.doClick}
        />
        <KanbanDummyList
        list={ dummyCards }/>
      </div>
    );
  }
}

export default App;