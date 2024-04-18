import {
  takeLatest,
  takeEvery,
  call,
  put
} from 'redux-saga/effects';

import {
  getProfileSuccess,
  getProfileFailure,

  getContentSuccess,
  getContentFailure,
} from '../Actions/appActions';

import {
  GET_PROFILE_REQUEST,
  GET_CONTENT_REQUEST,
} from '../Actions/appActions';

import { fetchDataFromApi } from '../api';

function* getProfile(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: 'http://127.0.0.1:8008/',
      path: 'profile/',
      qParams: '',
      payload: action.payload
    });

    yield put(getProfileSuccess(data));
  } catch (error) {
    yield put(getProfileFailure(error.message));
  }
}

function* getContent(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: 'http://127.0.0.1:8008/',
      path: 'content/',
      qParams: '',
      payload: action.payload
    });

    yield put(getContentSuccess(data));
  } catch (error) {
    yield put(getContentFailure(error.message));
  }
}

export default function* appSagas() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(GET_CONTENT_REQUEST, getContent);
}
