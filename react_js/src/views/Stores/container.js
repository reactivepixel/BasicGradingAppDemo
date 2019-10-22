import { connect } from 'react-redux';
import { fetchAllStores } from '../../store/stores/actions';
import { aryFromObjectByID } from '../../store/_utils';

function mapStateToProps(state) {
  // pull the data we need out of the current state
  const { stores } = state;

  // send them to the props of the component
  return {
    allStores: aryFromObjectByID(stores),
  };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchAllStores };
export default connect(mapStateToProps, mapDispatchToProps);
