import { WS_CONNECT, SEND_MESSAGE, receiveMessage } from 'src/actions';

let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('socket middleware', action);
  switch (action.type) {
    case WS_CONNECT: {
      socketCanal = window.io('http://localhost:3001');
      socketCanal.on('send_message', (message) => {
        console.log('un message a été envoyé', message);
        console.log('je peux réagir en modifiant mon state puisque je peux afficher dans l application');
        store.dispatch(receiveMessage(message));
      });
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();
      console.log('on demande envoyer un message je traduis dans le middleware');
      socketCanal.emit('send_message', { content: state.text, author: state.pseudo });
      break;
    }
    default:
      console.log('ça m\'intéresse pas je laisse passer');
  }
  next(action);
};

export default socket;
