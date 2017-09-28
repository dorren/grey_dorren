import React, { Component } from 'react';
import BoardInput from './BoardInput';
import MessageList from './MessageList';
import './board.css';
import ActionTypes from '../reducers/action_types';
import { connect } from 'react-redux';

const mapStateToProps = store => (store);

const mapDispatchToProps = dispatch => ({
  onAdd: msg =>
    dispatch({ type: ActionTypes.ADD_MSG, msg }),
  onDelete: msgId =>
    dispatch({ type: ActionTypes.DEL_MSG, msgId })
});

class Board extends Component {
  handleAdd = (msg) => {
    if(msg === undefined || msg === ''){ return; }

    msg = msg.split('').reverse().join('');
    let lastMsg = this.props.messages[0];
    if(msg !== lastMsg){ // prevent duplicate
      this.props.onAdd(msg);
    }
  }

  render() {
    return (
      <div className="Board">
        <BoardInput
          onAdd= { this.handleAdd }
        />

        <MessageList
          messages={ this.props.messages }
          onDelete= { this.props.onDelete} />
      </div>
    );
  }
}

const ReduxBoard =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Board)

export default ReduxBoard;
