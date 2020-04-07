import {GET_COURSES_SUCCESS} from './actionTypes';

const INITIAL_STATE = {
  allCourses: [],
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_COURSES_SUCCESS:
      return {...state, allCourses: payload};
    default:
      return state;
  }
};
