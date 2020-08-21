import { connect } from 'react-redux';
import { isAuthor } from 'src/selectors';

import Message from 'src/components/Messages/message';

const mapStateToProps = (state, ownProps) => ({
  isAuthor: isAuthor(state.pseudo, ownProps.author),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
