import { connect } from 'react-redux';

import Messages from 'src/components/messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
