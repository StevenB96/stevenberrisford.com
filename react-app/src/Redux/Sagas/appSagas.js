import {
  takeLatest,
  takeEvery,
  call,
  put,
  select,
} from 'redux-saga/effects';

import {
  getSiteSuccess,
  getSiteFailure,

  getProfilesSuccess,
  getProfilesFailure,
} from '../Actions/appActions';

import {
  GET_SITE_REQUEST,
  GET_PROFILES_REQUEST,
} from '../Actions/appActions';

import { fetchDataFromApi } from '../api';
import env from '../../env';

function* getSite(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.IP_DOMAIN}/`,
      path: 'site/',
      // qParams: '',
      // payload: action.payload
    });

    yield put(getSiteSuccess(data));
  } catch (error) {
    yield put(getSiteFailure(error.message));
  }
}

function* getProfiles(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.IP_DOMAIN}/`,
      path: 'profiles/',
      // qParams: '',
      // payload: action.payload
    });

    yield put(getProfilesSuccess(data));
  } catch (error) {
    yield put(getProfilesFailure(error.message));
  }
}

export default function* appSagas() {
  yield takeLatest(GET_SITE_REQUEST, getSite);
  yield takeLatest(GET_PROFILES_REQUEST, getProfiles);
}
