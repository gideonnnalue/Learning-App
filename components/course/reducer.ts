import {GET_COURSE_SUCCESS} from './actionTypes';
import {CourseActionsType} from './types';
import {actionTypes} from '../allCourses';

const INITIAL_STATE = {
  course: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COURSE_SUCCESS:
      return {...state, course: action.payload};
    case actionTypes.VIEW_MODULE_SUCCESS:
      const course = setViewedModules(state, action.payload);
      return {...state, course};
    default:
      return state;
  }
};

const setViewedModules = (state, payload) => {
  const course = {...state.course};
  if (!course.viewedCourses.includes(payload.id)) {
    course.viewedCourses.push(payload.id);
  }
  return course;
};
