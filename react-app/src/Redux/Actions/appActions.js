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