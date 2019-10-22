import API from '../../API';

export const CREATE_PRODUCT = 'stores:createStore';
export const GET_PRODUCTS = 'stores:getStores';
export const UPDATE_PRODUCT = 'stores:updateStore';
export const DELETE_PRODUCT = 'stores:deleteStore';

export const createStore = store => ({
  type: CREATE_PRODUCT,
  payload: store,
});

export const updateStore = store => ({
  type: UPDATE_PRODUCT,
  payload: store,
});

export const getStores = stores => ({
  type: GET_PRODUCTS,
  payload: {
    stores,
  },
});

export const deleteStore = store => ({
  type: DELETE_PRODUCT,
  payload: store,
});

// Create
export const fetchCreateStore = store => dispatch => API.post('/stores', store)
  .then((res) => {
    dispatch(createStore(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Read (all)
export const fetchAllStores = () => dispatch => API.get('/stores')
  .then((res) => {
    dispatch(getStores(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Read (all)
export const fetchStoresByStoreID = (store_id) => dispatch => API.get(`/storeStores/${store_id}`)
  .then((res) => {
    dispatch(getStores(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Update
export const fetchUpdateStore = store => dispatch => API.put(`/stores/${store.id}`, store)
  .then((res) => {
    dispatch(updateStore(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Delete
export const fetchDeleteStore = store => dispatch => API.delete(`/stores/${store.id}`)
  .then((res) => {
    if (res.data === 'OK') {
      dispatch(deleteStore(store));
    }
  })
  .catch((error) => {
    throw (error);
  });
