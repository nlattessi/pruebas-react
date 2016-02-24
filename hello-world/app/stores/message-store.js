//import AppDispatcher from '../dispatcher/app-dispatcher';
import { CREATE } from '../constants/message-constants';
import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

export default class MessageStore extends ReduceStore {
  getInitialState() {
    return Immutable.fromJS({
      messages: []
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case CREATE:
        return state.update('messages', messages => messages.unshift({
          id: messages.count(),
          author: 'Nahuel L',
          content: action.content,
          createdAt: new Date()
        }));

      default:
        return state;
    }
  }
}
