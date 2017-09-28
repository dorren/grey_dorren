import React, { Component } from 'react';

/**
 * render list of messages
 */
class MessageList extends Component {
  render() {
    let msgElems = (this.props.messages).map((x,i) => {
       return (
         <div className="Message" key={i}>
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
        { msgElems }
      </div>
    );
  }
}

export default MessageList;
