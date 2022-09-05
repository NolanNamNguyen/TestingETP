import { all, takeEvery, put } from 'redux-saga/effects';
import {
  getExamList,
  getExamListSuccess,
  getExamListFailed,
} from '@reduxSlices/topPageSlice';
import Api from '@apiConfig';
import { GET_EXAM_END_POINT } from '@constant/endpoint';

function* handleGetExamList({ payload }) {
  try {
    const response = yield Api.get(
      GET_EXAM_END_POINT,
      {},
      'https://6315cdb033e540a6d384d3cb.mockapi.io',
    );
    yield put(getExamListSuccess(response.data));
  } catch (error) {
    yield put(getExamListFailed(error));
  }
}

function* commonSaga() {
  yield all([takeEvery(getExamList.type, handleGetExamList)]);
}

export default commonSaga;
