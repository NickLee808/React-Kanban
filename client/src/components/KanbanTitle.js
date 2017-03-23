import React from 'react';

const KanbanTitle = (props) => (
  <div className='App-header'>
    <h2>{ props.title }</h2>
    <button onClick={ props.doClick }>DO CLICK</button>
  </div>
);

export default KanbanTitle;