import {
  CREATE_PRODUCT, UPDATE_PRODUCT, GET_PRODUCTS, DELETE_PRODUCT,
} from './actions';

import {
  arrayToObject,
  removeIdFromObject,
} from '../_utils';

const initState = {
  byID: {},
};

export default function productsReducer(state = initState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        byID: {
          ...state.byID,
          [payload.id]: payload,
        },
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        byID: {
          ...state.byID,
          [payload.id]: payload,
        },
      };
    case GET_PRODUCTS:
      return {
        byID: {
          ...state.byID,
          ...arrayToObject(payload.products),
        },
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        byID: removeIdFromObject(payload.id, state.byID),
      };
    default:
      return {
        ...state,
      };
  }
}
