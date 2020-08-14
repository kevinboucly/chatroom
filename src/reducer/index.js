const initialState = {
  messages: [
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
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;

  }
};

export default reducer;
