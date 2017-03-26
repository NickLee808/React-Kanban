export const ADD_CARD = 'ADD_CARD';

export function addCard(title, author){
  return {
    type: ADD_CARD,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  };
}