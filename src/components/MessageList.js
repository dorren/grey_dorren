import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

/**
 * render list of messages
 */
class MessageList extends Component {
  render() {
    let items = (this.props.messages).map((x,i) => {
       return (
         <div className="Message" key={x}>
           <div className="Heading">
             <span className="Delete"
               onClick={()=>this.props.onDelete(i)}>&#x2573;</span>
           </div>
           <div className="Body">
            { x }
           </div>
         </div>
       )
    });

    return (
      <div className="MessageList">
        <CSSTransitionGroup
          transitionName="message"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={400}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default MessageList;
