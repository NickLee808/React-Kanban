const ADD_CARD = 'ADD_CARD'
;
const initialState = {
  cards: []
};

export default function cards(state = initialState, action){
  switch(action.type){
    case ADD_CARD:
      return Object.assign({}, state, {
        cards: [
          // "spread operator"
          ...state.cards,
          {
            title: action.title,
            priority: action.priority,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo
          }
        ]
      });
    default:
      return state;
  }
}