import {call, put, takeEvery} from 'redux-saga/effects';

import * as TYPES from './actionTypes';
import {getCourseSuccess} from './actions';
import {getCourseService} from './services';

function* getCourse(id: number) {
  try {
    const data = yield call(getCourseService, id);
    yield put(getCourseSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* getCourseEffect({id}: {id: number}) {
  yield call(getCourse, id);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.GET_COURSE, getCourseEffect);
}
