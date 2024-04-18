import { all } from 'redux-saga/effects';
import appSagas from './appSagas';

export default function* rootSaga() {
  yield all([
    appSagas(),
  ]);
}