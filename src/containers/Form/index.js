import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { sendMessage, changeText } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.text,
});

const mapDispatchToProps = (dispatch) => ({
  send: () => {
    const action = sendMessage();
    dispatch(action);
  },
  changeText: (value) => {
    const action = changeText(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
