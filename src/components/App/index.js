// == Import npm
import React from 'react';

// == Import
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/components/Settings';

import './style.scss';


// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
    <Settings />
  </div>
);

// == Export
export default App;
