import { connect } from 'react-redux';

import Field from 'src/components/Field';
import { change } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
  // console.log('ownprops', ownProps.name);
  return ({
    value: state[ownProps.name],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    // console.log('je veux changer la valeur de se champ');
    // console.log(dispatch, newValue, ownProps.name);
    const action = change(ownProps.name, newValue);
    // console.log(action);

    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
