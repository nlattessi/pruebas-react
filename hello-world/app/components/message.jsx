import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class Message extends Component {
  static propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date)
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, moment.duration(1, 'minute').asMilliseconds());
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="message">
        <div className="message__author-line">
          <div className="message__author">{this.props.author}</div>
          <div className="message__created-at">{moment(this.props.createdAt).fromNow()}</div>
        </div>
        <div className="message__content">{this.props.content}</div>
      </div>
    )
  }
}
