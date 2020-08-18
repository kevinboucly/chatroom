import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleOpen } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    dispatch(toggleOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
