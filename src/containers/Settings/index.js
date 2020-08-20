import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleOpen, login } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    dispatch(toggleOpen());
  },
  login: () => {
    // console.log('je veux me connecter');
    const action = login();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
