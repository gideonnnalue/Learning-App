import {GET_COURSE, GET_COURSE_SUCCESS} from './actionTypes';

export const getCourse = id => ({type: GET_COURSE, id});
export const getCourseSuccess = course => ({
  type: GET_COURSE_SUCCESS,
  payload: course,
});
