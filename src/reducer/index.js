import {
  SEND_MESSAGE, CHANGE_TEXT, TOGGLE_OPEN, CHANGE,
} from 'src/actions';
import { getNextId } from 'src/selectors';

const initialState = {
  open: true,
  text: '',
  pseudo: 'anonyme',
  email: '',
  password: '',
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

      const id = getNextId(state.messages);

      const newMessage = {
        author: state.pseudo,
        content: state.text,
        id,
      };
      newMessages.push(newMessage);
      return {
        ...state,
        messages: newMessages,
        text: '',
      };
    }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
