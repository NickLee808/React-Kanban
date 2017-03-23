import React from 'react';

const KanbanDummyList = (props) => (
  <ul>
    {
      props.list.map((card) => {
        return (
          <li key={card.id}>
            <h3>{card.title}</h3>
              <p>{card.priority}</p>
              <p>{card.status}</p>
              <p>{card.createdBy}</p>
              <p>{card.assignedTo}</p>
          </li>
        );
      })
    }
  </ul>
);

export default KanbanDummyList;