'use-strict';

import React from 'react';
import { render } from 'react-dom';
import { ChatFeed } from 'react-chat-ui';
import $ from 'jquery';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages : [
        {type:1, message: "Hey There!"}, // Gray bubble
        {type:1, message: "I'm react-chat-ui! Type a message and press enter\
        to send something."}, // Gray bubble
      ],
      is_typing: false
    }
  }

  _pushMessage(recipient, message) {
    var prevState = this.state
    prevState.messages.push({type: recipient, message: message})
    this.setState(this.state)
  }

  _onMessageSubmit(e) {
    var input = this.refs.message;
    e.preventDefault();
    if (!input.value) {return false;}
    this._pushMessage(0, input.value)
    input.value = '';

  }

  render() {
    return(
      <div>
        <ChatFeed
          messages={this.state.messages} // Boolean: list of message objects
          is_typing={this.state.is_typing} // Boolean: is the recipient typing
          bubbleStyles={{ // JSON: Custom bubble styles
            text: {
              fontSize: 18,
            },
            chatbubble: {
              borderRadius: 25,
              lineHeight: 1.3,
              marginLeft: 0,
              maxWidth: 600,
            },
            userBubble: {
              backgroundColor: '#0084FF',
            }
          }}
        />

      <form onSubmit={this._onMessageSubmit.bind(this)}>
        <input ref="message" placeholder="Type a message..." className="message-input" />
      </form>
      </div>
    )
  }
}

function rotate() {
    $("#logo").hover(
      () => {
        $("#logo").addClass('rotate');
      },
      () => {
        $("#logo").removeClass('rotate');
      }
    );
}

rotate();

render(
  (<Chat/>)
  ,
  document.getElementById('chat-section')
)
