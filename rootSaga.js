import {all} from 'redux-saga/effects';

import {sagas as actionWatcherAllCourses} from './components/allCourses';
import {sagas as actionWatcherCourse} from './components/course';

export default function* rootSaga() {
  yield all([actionWatcherAllCourses(), actionWatcherCourse()]);
}
