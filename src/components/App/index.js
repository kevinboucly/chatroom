// == Import npm
import React, { useEffect } from 'react';

// == Import
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';

import './style.scss';

// == Composant
const App = () => {
  useEffect(() => {
    console.log('je veux me connecter au websocket');
    const socket = window.io('http://localhost:3001');
    socket.on('send_message', (info) => {
      console.log('un message a été envoyé', info);
    });
    socket.emit('send_message', { content:'salut', author:'keke'});
  }, []);
  return (
    <div className="app">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};
// == Export
export default App;
