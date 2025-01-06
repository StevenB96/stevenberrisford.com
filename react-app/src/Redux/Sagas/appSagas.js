import {
  takeLatest,
  takeEvery,
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  getProfileSuccess,
  getProfileFailure,

  getContentSuccess,
  getContentFailure,

  getChatbotResponseSuccess,
  getChatbotResponseFailure,

  getReferencesSuccess,
  getReferencesFailure,
} from '../Actions/appActions';

import {
  GET_PROFILE_REQUEST,
  GET_CONTENT_REQUEST,
  GET_CHATBOT_RESPONSE_REQUEST,
  GET_REFERENCES_REQUEST,
} from '../Actions/appActions';

import { fetchDataFromApi } from '../api';
import env from '../../env';

function* getProfile(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.IP_DOMAIN}/`,
      path: 'profile/',
      // qParams: '',
      // payload: action.payload
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
      url: `${env.IP_DOMAIN}/`,
      path: 'content/',
      // qParams: '',
      // payload: action.payload
    });

    yield put(getContentSuccess(data));
  } catch (error) {
    yield put(getContentFailure(error.message));
  }
}

function* getChatbotResponse(action) {
  try {
    const uuid = yield select((state) => state.app.uuid);

    const data = yield call(fetchDataFromApi, {
      method: 'POST',
      url: `${env.IP_DOMAIN}/`,
      path: 'chatbotResponse/',
      qParams: '',
      payload: {
        uuid,
        query: action.params,
      }
    });

    yield put(getChatbotResponseSuccess(data));
  } catch (error) {
    yield put(getChatbotResponseFailure(error.message));
  }
}

function* getReferences(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.IP_DOMAIN}/`,
      path: 'references/',
      // qParams: '',
      // payload: action.payload
    });

    yield put(getReferencesSuccess(data));
  } catch (error) {
    yield put(getReferencesFailure(error.message));
  }
}

export default function* appSagas() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(GET_CONTENT_REQUEST, getContent);
  yield takeLatest(GET_CHATBOT_RESPONSE_REQUEST, getChatbotResponse);
  yield takeLatest(GET_REFERENCES_REQUEST, getReferences);
}
