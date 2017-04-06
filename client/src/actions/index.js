export const ADD_CARD = 'ADD_CARD';

// just a function that when called, returns an object
export function addCard(id, title, priority, status, createdBy, assignedTo){
    // this object is the ACTION, or PAYLOAD
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