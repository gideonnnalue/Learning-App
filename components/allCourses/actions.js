import {GET_COURSES, GET_COURSES_SUCCESS} from './actionTypes';

export const getCourses = () => ({type: GET_COURSES});
export const getCoursesSuccess = courses => ({
  type: GET_COURSES_SUCCESS,
  payload: courses,
});
