import ActionTypes from './action_types';

let initial = {messages: []};

const BoardReducer = (state=initial, action) => {
  switch (action.type) {
    case ActionTypes.DEL_MSG:
      return {
        ...state,
        messages: state.messages.filter((x,i)=> i !== action.msgId)};
    case ActionTypes.ADD_MSG:
      return {
        ...state,
        messages: [action.msg].concat(state.messages)};
    default:
      return state;
  }
}

export default BoardReducer;
