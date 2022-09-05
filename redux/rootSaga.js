import { all } from 'redux-saga/effects';
import commonSaga from './sagas/commonSaga';
import topPageSaga from './sagas/topPageSaga';

export default function* rootSaga() {
  yield all([commonSaga(), topPageSaga()]);
}
