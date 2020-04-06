import {combineReducers} from 'redux';

import {reducer as allCoursesReducer} from './components/allCourses';
import {reducer as courseReducer} from './components/course';

export default combineReducers({
  courses: allCoursesReducer,
  course: courseReducer,
});
