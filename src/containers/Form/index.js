import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { sendMessage } from 'src/actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  send: () => {
    const action = sendMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
