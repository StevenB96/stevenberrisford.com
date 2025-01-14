export const GET_SITE_REQUEST = 'GET_SITE_REQUEST';
export const GET_SITE_SUCCESS = 'GET_SITE_SUCCESS';
export const GET_SITE_FAILURE = 'GET_SITE_FAILURE';

export const getSiteRequest = (params) => ({
  type: GET_SITE_REQUEST,
  params,
});
export const getSiteSuccess = (data) => ({
  type: GET_SITE_SUCCESS,
  payload: data,
});
export const getSiteFailure = (error) => ({
  type: GET_SITE_FAILURE,
  payload: error,
});

export const GET_PROFILES_REQUEST = 'GET_PROFILES_REQUEST';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAILURE = 'GET_PROFILES_FAILURE';

export const getProfilesRequest = (params) => ({
  type: GET_PROFILES_REQUEST,
  params,
});
export const getProfilesSuccess = (data) => ({
  type: GET_PROFILES_SUCCESS,
  payload: data,
});
export const getProfilesFailure = (error) => ({
  type: GET_PROFILES_FAILURE,
  payload: error,
});

export const SET_CONTENT_DISPLAY_REQUEST = 'SET_CONTENT_DISPLAY_REQUEST';
export const SET_CONTENT_DISPLAY_SUCCESS = 'SET_CONTENT_DISPLAY_SUCCESS';
export const SET_CONTENT_DISPLAY_FAILURE = 'SET_CONTENT_DISPLAY_FAILURE';

export const setContentDisplayRequest = (params) => ({
  type: SET_CONTENT_DISPLAY_REQUEST,
  params,
});
export const setContentDisplaysSuccess = (data) => ({
  type: SET_CONTENT_DISPLAY_SUCCESS,
  payload: data,
});
export const setContentDisplayFailure = (error) => ({
  type: SET_CONTENT_DISPLAY_FAILURE,
  payload: error,
});