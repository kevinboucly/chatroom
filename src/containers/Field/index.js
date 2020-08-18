import { connect } from 'react-redux';

import Field from 'src/components/Field';

const mapStateToProps = (state, ownProps) => {
  console.log('ownprops', ownProps.name);
  return ({
    value: state[ownProps.name],
  });
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
