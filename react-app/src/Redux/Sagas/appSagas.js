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

  getChatbotResponseSuccess,
  getChatbotResponseFailure,
} from '../Actions/appActions';

import {
  GET_PROFILE_REQUEST,
  GET_CONTENT_REQUEST,
  GET_CHATBOT_RESPONSE_REQUEST,
} from '../Actions/appActions';

import { fetchDataFromApi } from '../api';
import env from '../../env';

function* getProfile(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.SERVER_URL || "http://localhost:3000"}/`,
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
      url: `${env.SERVER_URL || "http://localhost:3000"}/`,
      path: 'content/',
      qParams: '',
      payload: action.payload
    });

    yield put(getContentSuccess(data));
  } catch (error) {
    yield put(getContentFailure(error.message));
  }
}

function* getChatbotResponse(action) {
  try {
    // const data = yield call(fetchDataFromApi, {
    //   method: 'GET',
    //   url: `${env.SERVER_URL || "http://localhost:3000"}/`,
    //   path: 'content/',
    //   qParams: '',
    //   payload: action.payload
    // });

    yield put(getChatbotResponseSuccess('data'));
  } catch (error) {
    yield put(getChatbotResponseFailure(error.message));
  }
}

export default function* appSagas() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(GET_CONTENT_REQUEST, getContent);
  yield takeLatest(GET_CHATBOT_RESPONSE_REQUEST, getChatbotResponse);
}
