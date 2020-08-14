// == Import npm
import React from 'react';

// == Import
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';

import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
