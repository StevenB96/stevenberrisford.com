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

import {
  commonFunctions
} from '../../Hooks';

const uuid = commonFunctions.getPersistentUUID();

const initialState = {
  uuid,
  profile: {},
  projects: [],
  articles: [],
  hobbies: [],
  chatbotMessages: [
    {
      author: 'chatbot',
      text: "Use this Chatbot to make equiries about me. E.g. how can you can be contacted? or when did you use teamwork skills?",
    }
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

    case GET_CHATBOT_RESPONSE_REQUEST: {
      const newChatbotMessages = action.params === 'Clear chat history' ?
        state.chatbotMessages :
        [...state.chatbotMessages, {
          author: "user",
          text: action.params
        }];

      return {
        ...state,
        chatbotMessages: newChatbotMessages,
        loading: true,
        error: null
      };
    }
    case GET_CHATBOT_RESPONSE_SUCCESS: {
      const newChatbotMessages = action.payload === 'Chat history successfully cleared.' ?
        state.chatbotMessages :
        [...state.chatbotMessages, {
          author: "chatbot",
          text: action.payload
        }];

      return {
        ...state,
        chatbotMessages: newChatbotMessages,
        loading: false,
        error: false
      };
    }
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
