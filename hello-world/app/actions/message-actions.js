import { CREATE } from '../constants/message-constants';

export default class MessageActions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  create(newContent) {
    this.dispatcher.dispatch({
      type: CREATE,
      content: newContent
    });
  }
}
