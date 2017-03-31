export const ADD_CARD = 'ADD_CARD';

export function addCard(id, title, priority, status, createdBy, assignedTo){
    return {
        type: ADD_CARD,
        id,
        title,
        priority,
        status,
        createdBy,
        assignedTo
    };
}