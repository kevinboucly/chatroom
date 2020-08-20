import { WS_CONNECT, SEND_MESSAGE } from 'src/actions';

let socketCanal;

const socket = (store) => (next) => (action) => {
  console.log('socket middleware', action);
  switch (action.type) {
    case WS_CONNECT: {
      socketCanal = window.io('http://localhost:3001');
      socketCanal.on('send_message', (info) => {
        console.log('un message a été envoyé', info);
        console.log('je peux réagir en modifiant mon state puisque je peux afficher dans l application');
      });
      break;
    }
    case SEND_MESSAGE:
      console.log('on demande envoyer un message je traduis dans le middleware');
      socketCanal.emit('send_message', { content: 'salut', author: 'keke' });
      break;
    default:
      console.log('ça m\'intéresse pas je laisse passer');
  }
  next(action);
};

export default socket;
