import {GET_COURSE_SUCCESS} from './actionTypes';

const INITIAL_STATE = {
  course: null,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_COURSE_SUCCESS:
      return {...state, course: payload};
    default:
      return state;
  }
};
