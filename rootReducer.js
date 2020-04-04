import {combineReducers} from 'redux';

import {reducer as allCoursesReducer} from './components/allCourses';

export default combineReducers({
  courses: allCoursesReducer,
});
