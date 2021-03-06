import React from 'react';

const Scrum = (props) => (
  <div>
    {
      props.list.map((column) => { 
        return (
          <div key={column.name}>
            <h1>{column.name}</h1>
            <ul>
              {
                column.cards.map((card) => {
                  return (
                    <div key={card.id}>
                      <p>Name: {card.title}</p>
                      <p>Priority: {card.priority}</p>
                      <p>Status: {card.status}</p>
                      <p>{card.createdBy}</p>
                      <p>{card.assignedTo}</p>
                    </div>
                  );
                })
              }
            </ul>
          </div>
        );
      })
    }
  </div>
);

export default Scrum;