import API from '../../API';

export const CREATE_PRODUCT = 'products:createProduct';
export const GET_PRODUCTS = 'products:getProducts';
export const UPDATE_PRODUCT = 'products:updateProduct';
export const DELETE_PRODUCT = 'products:deleteProduct';

export const createProduct = product => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const getProducts = products => ({
  type: GET_PRODUCTS,
  payload: {
    products,
  },
});

export const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  payload: product,
});

// Create
export const fetchCreateProduct = product => dispatch => API.post('/products', product)
  .then((res) => {
    dispatch(createProduct(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Read (all)
export const fetchAllProducts = () => dispatch => API.get('/products')
  .then((res) => {
    dispatch(getProducts(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Read (all)
export const fetchProductsByStoreID = (store_id) => dispatch => API.get(`/storeProducts/${store_id}`)
  .then((res) => {
    dispatch(getProducts(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Update
export const fetchUpdateProduct = product => dispatch => API.put(`/products/${product.id}`, product)
  .then((res) => {
    dispatch(updateProduct(res.data));
  })
  .catch((error) => {
    throw (error);
  });

// Delete
export const fetchDeleteProduct = product => dispatch => API.delete(`/products/${product.id}`)
  .then((res) => {
    if (res.data === 'OK') {
      dispatch(deleteProduct(product));
    }
  })
  .catch((error) => {
    throw (error);
  });
