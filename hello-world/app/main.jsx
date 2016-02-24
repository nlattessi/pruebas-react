import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './components/message';
import MessageCreator from './components/message-creator';
import css from './main.css';

import MessageActions from './actions/message-actions';
import { Dispatcher } from 'flux';
import MessageStore from './stores/message-store';


class App extends Component {
  constructor(props) {
    super(props);

    this.dispatcher = new Dispatcher();
    this.store = new MessageStore(this.dispatcher);
    this.actions = new MessageActions(this.dispatcher);

    this.state = {
      data: this.store.getState()
    };
  }

  componentDidMount() {
    this.listener = this.store.addListener(this.onStateChanged.bind(this));
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  addMessage(newContent) {
    this.actions.create(newContent);
  }

  onStateChanged() {
    this.setState({
      data: this.store.getState()
    });
  }

  render() {
    return (
      <div>
        <MessageCreator create={this.addMessage.bind(this)} />
        {
          this.state.data.get('messages').map(message => {
            return <Message
              author={message.author}
              content={message.content}
              createdAt={message.createdAt}
              key={message.id} />;
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#react-mount'));
