import API from '../../API';

export const CREATE_PRODUCT = 'students:createStudent';
export const GET_PRODUCTS = 'students:getStudents';
export const UPDATE_PRODUCT = 'students:updateStudent';
export const DELETE_PRODUCT = 'students:deleteStudent';

export const createStudent = student => ({
  type: CREATE_PRODUCT,
  payload: student,
});

export const updateStudent = student => ({
  type: UPDATE_PRODUCT,
  payload: student,
});

export const getStudents = students => ({
  type: GET_PRODUCTS,
  payload: {
    students,
  },
});

export const deleteStudent = student => ({
  type: DELETE_PRODUCT,
  payload: student,
});

// Create
export const fetchCreateStudent = student => dispatch => API.post('/students', student)
  .then((res) => {
    dispatch(createStudent(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Read (all)
export const fetchAllStudents = () => dispatch => API.get('/students')
  .then((res) => {
    dispatch(getStudents(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Read (all)
export const fetchStudentsByStudentID = (student_id) => dispatch => API.get(`/studentStudents/${student_id}`)
  .then((res) => {
    dispatch(getStudents(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Update
export const fetchUpdateStudent = student => dispatch => API.put(`/students/${student.id}`, student)
  .then((res) => {
    dispatch(updateStudent(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Delete
export const fetchDeleteStudent = student => dispatch => API.delete(`/students/${student.id}`)
  .then((res) => {
    if (res.data === 'OK') {
      dispatch(deleteStudent(student));
    }
  })
  .catch((error) => {
    throw (error);
  });
