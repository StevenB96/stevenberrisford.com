import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,

  GET_CONTENT_REQUEST,
  GET_CONTENT_SUCCESS,
  GET_CONTENT_FAILURE,

  GET_CHATBOT_RESPONSE_REQUEST,
  GET_CHATBOT_RESPONSE_SUCCESS,
  GET_CHATBOT_RESPONSE_FAILURE,
} from '../Actions/appActions';

const initialState = {
  profile: {},
  projects: [],
  articles: [],
  hobbies: [],
  chatbotMessages: [
    {
      author: "chatbot",
      text: 'a',
    },
    {
      author: "self",
      text: 'b',
    },
  ],
  loading: false,
  error: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
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
        ...state,
        loading: false,
        error: true
      };

    case GET_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_CONTENT_SUCCESS:
      const projects = action.payload?.filter(item => item.content_type === 1);
      const articles = action.payload?.filter(item => item.content_type === 2);
      const hobbies = action.payload?.filter(item => item.content_type === 3);

      return {
        ...state,
        projects,
        articles,
        hobbies,
        loading: false,
        error: false
      };
    case GET_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    case GET_CHATBOT_RESPONSE_REQUEST:
      return {
        ...state,
        chatbotMessages: [...state.chatbotMessages, {
          author: "self",
          text: action.params
        }],
        loading: true,
        error: null
      };
    case GET_CHATBOT_RESPONSE_SUCCESS:
      return {
        ...state,
        chatbotMessages: [...state.chatbotMessages, {
          author: "chatbot",
          text: action.payload
        }],
        loading: false,
        error: false
      };
    case GET_CHATBOT_RESPONSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default app;
