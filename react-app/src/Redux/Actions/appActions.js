export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const getProfileRequest = (params) => ({
  type: GET_PROFILE_REQUEST,
  params,
});
export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});
export const getProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
});

export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';
export const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS';
export const GET_CONTENT_FAILURE = 'GET_CONTENT_FAILURE';

export const getContentRequest = (params) => ({
  type: GET_CONTENT_REQUEST,
  params,
});
export const getContentSuccess = (data) => ({
  type: GET_CONTENT_SUCCESS,
  payload: data,
});
export const getContentFailure = (error) => ({
  type: GET_CONTENT_FAILURE,
  payload: error,
});

export const GET_CHATBOT_RESPONSE_REQUEST = 'GET_CHATBOT_RESPONSE_REQUEST';
export const GET_CHATBOT_RESPONSE_SUCCESS = 'GET_CHATBOT_RESPONSE_SUCCESS';
export const GET_CHATBOT_RESPONSE_FAILURE = 'GET_CHATBOT_RESPONSE_FAILURE';

export const getChatbotResponseRequest = (params) => ({
  type: GET_CHATBOT_RESPONSE_REQUEST,
  params,
});
export const getChatbotResponseSuccess = (data) => ({
  type: GET_CHATBOT_RESPONSE_SUCCESS,
  payload: data,
});
export const getChatbotResponseFailure = (error) => ({
  type: GET_CHATBOT_RESPONSE_FAILURE,
  payload: error,
});