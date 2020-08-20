import { WS_CONNECT } from 'src/actions';

const socket = (store) => (next) => (action) => {
  console.log('socket middleware', action);
  switch (action.type) {
    case WS_CONNECT: {
      const socketCanal = window.io('http://localhost:3001');
      socket.on('send_message', (info) => {
        console.log('un message a été envoyé', info);
      });
      socketCanal.emit('send_message', { content: 'salut', author: 'keke' });
      break;
    }
    default:
      console.log('ça m\'intéresse pas je laisse passer');
  }
  next(action);
};

export default socket;
