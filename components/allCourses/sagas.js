import {call, put, takeEvery} from 'redux-saga/effects';

import * as TYPES from './actionTypes';
import {getCoursesSuccess} from './actions';
import {getCoursesService} from './services';

function* getCourses() {
  try {
    const data = yield call(getCoursesService);
    yield put(getCoursesSuccess(data.data));
  } catch (err) {
    console.log(err);
  }
}

function* getCoursesEffect() {
  yield call(getCourses);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.GET_COURSES, getCoursesEffect);
}
