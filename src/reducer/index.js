import { SEND_MESSAGE } from 'src/actions';

const initialState = {
  messages: [
    {
      author: 'super chat',
      content: 'salut',
      id: 1,
    },
    {
      author: 'keke',
      content: 'hello',
      id: 2,
    },
    {
      author: 'tata',
      content: 'yoo',
      id: 3,
    },
    {
      author: 'simon',
      content: 'hareuh',
      id: 4,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessages = [
        ...state.messages,
      ];
      const newMessage = {
        author: 'Super chat',
        content: 'test',
        id: 999,
      };
      newMessages.push(newMessage);
      return {
        ...state,
        messages: newMessages,
      };
    }
    default:
      return state;
  }
};

export default reducer;
