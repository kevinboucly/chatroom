import axios from 'axios';
import { LOGIN, change } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('http://localhost:3001/login', { email: state.email, password: state.password })
        .then((response) => {
          // console.log(response.data);
          const actionPseudo = change('pseudo', response.data);
          store.dispatch(actionPseudo);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth;
