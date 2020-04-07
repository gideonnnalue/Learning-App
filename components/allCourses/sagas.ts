import {call, put, takeEvery} from 'redux-saga/effects';

import * as TYPES from './actionTypes';
import {
  getCoursesSuccess,
  saveCourseSuccess,
  viewModuleSuccess,
} from './actions';
import {getCoursesService} from './services';

function* saveCourse(id) {
  yield put(saveCourseSuccess(id));
}

function* getCourses() {
  try {
    const data = yield call(getCoursesService);
    yield put(getCoursesSuccess(data.data));
  } catch (err) {
    console.log(err);
  }
}

function* viewModule({courseId, id}) {
  yield put(viewModuleSuccess(courseId, id));
}

function* getCoursesEffect() {
  yield call(getCourses);
}

function* saveCourseEffect({id}) {
  yield call(saveCourse, id);
}

function* viewModuleEffect(data) {
  yield call(viewModule, data);
}

export default function* actionWatcher() {
  yield takeEvery(TYPES.GET_COURSES, getCoursesEffect);
  yield takeEvery(TYPES.SAVE_COURSE, saveCourseEffect);
  yield takeEvery(TYPES.VIEW_MODULE, viewModuleEffect);
}
