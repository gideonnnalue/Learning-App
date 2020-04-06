import {GET_COURSE_SUCCESS} from './actionTypes';
import {CourseActionsType} from './types';

const INITIAL_STATE = {
  course: null,
};

export default (state = INITIAL_STATE, action: CourseActionsType) => {
  switch (action.type) {
    case GET_COURSE_SUCCESS:
      return {...state, course: action.payload};
    default:
      return state;
  }
};
