import React from 'react';

const Scrum = (props) => (
  <div>
    {
      props.list.map((column) => { 
        return (

          <div>
            <p>{column.name}</p>
            <ul>
              {
                column.cards.map((card) => {
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
          </div>
        
        );
      })
    }
  </div>
);

export default Scrum;