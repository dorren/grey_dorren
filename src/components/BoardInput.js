import React, { Component } from 'react';

/**
 * message board Input
 */
class BoardInput extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }

  setCurrentMsg = (ev) => {
    this.setState({currentMsg: ev.target.value});
  }

  handleAdd = () => {
    this.props.onAdd(this.state.currentMsg);
    this.clearCurrent();
  }

  clearCurrent = () => {
    this.setState({currentMsg: ""});
    this.currentInput.value = "";
  }

  handleEnter = (ev) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      this.handleAdd();
      this.clearCurrent();
    }
  }

  render() {
    return (
      <div className="BoardInput">
        <div className="Text">
          <input type="text"
            ref={(elem) => { this.currentInput = elem; }}
            onChange= { this.setCurrentMsg }
            onKeyPress={ this.handleEnter }
            />
        </div>
        <div className="Actions">
          <button className="SendBtn"
            onClick = { this.handleAdd }>Send</button>
        </div>
      </div>
    );
  }
}

export default BoardInput;
