import { connect } from 'react-redux';
import { fetchAllStudents, fetchCreateStudent } from '../../store/students/actions';
import { aryFromObjectByID } from '../../store/_utils';

function mapStateToProps(state) {
  // pull the data we need out of the current state
  const { students } = state;

  // send them to the props of the component
  return {
    allStudents: aryFromObjectByID(students),
  };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchAllStudents, fetchCreateStudent };
export default connect(mapStateToProps, mapDispatchToProps);
