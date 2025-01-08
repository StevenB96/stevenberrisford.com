import {
  GET_SITE_REQUEST,
  GET_SITE_SUCCESS,
  GET_SITE_FAILURE,

  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAILURE,
} from '../Actions/appActions';

const initialState = {
  site: {},
  profiles: [],
  loading: false,
  error: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    // Site actions
    case GET_SITE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_SITE_SUCCESS:
      return {
        ...state,
        site: action.payload,
        loading: false,
        error: false
      };
    case GET_SITE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    // Profiles actions
    case GET_PROFILES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
        error: false
      };
    case GET_PROFILES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    // Default case returns the current state unchanged if no actions match
    default:
      return state;
  }
};

export default app;
