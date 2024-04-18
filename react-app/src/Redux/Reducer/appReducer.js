import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,

  GET_CONTENT_REQUEST,
  GET_CONTENT_SUCCESS,
  GET_CONTENT_FAILURE,
} from '../Actions/appActions';

const initialState = {
  profile: {},
  projects: [],
  articles: [],
  hobbies: [],
  loading: false,
  error: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        loading: true,
        error: null
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: false
      };
    case GET_PROFILE_FAILURE:
      return {
        loading: false,
        error: true
      };

    case GET_CONTENT_REQUEST:
      return {
        loading: true,
        error: null
      };
    case GET_CONTENT_SUCCESS:
      const projects = action.payload?.filter(item => item.content_type === 1);
      const articles = action.payload?.filter(item => item.content_type === 2);
      const hobbies = action.payload?.filter(item => item.content_type === 3);

      return {
        ...state,
        projects: projects?.length > 1 ? projects : [...projects, null],
        articles: articles?.length > 1 ? articles : [...articles, null],
        hobbies: hobbies?.length > 1 ? hobbies : [...hobbies, null],
        loading: false,
        error: false
      };
    case GET_CONTENT_FAILURE:
      return {
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default app;
