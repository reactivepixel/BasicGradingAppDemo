import { connect } from 'react-redux';
import { fetchProductsByStoreID } from '../../store/products/actions';
import { aryFromObjectByID } from '../../store/_utils';

function mapStateToProps(state) {
  // pull the data we need out of the current state
  const { products } = state;

  // send them to the props of the component
  return {
    allProducts: aryFromObjectByID(products),
  };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchProductsByStoreID };
export default connect(mapStateToProps, mapDispatchToProps);
