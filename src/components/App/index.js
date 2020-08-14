// == Import npm
import React from 'react';

// == Import
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';

import './style.scss';

const testMessages = [
  {
    author: 'super chat',
    content: 'coucou',
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
  }
];
// == Composant
const App = () => (
  <div className="app">
    <Messages messages={testMessages} />
    <Form />
  </div>
);

// == Export
export default App;
