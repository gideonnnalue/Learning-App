import {GET_COURSES, GET_COURSES_SUCCESS} from './actionTypes';
import {
  GetCoursesActionType,
  GetCoursesSuccessActionType,
  Courses,
} from './types';

export const getCourses = (): GetCoursesActionType => ({type: GET_COURSES});
export const getCoursesSuccess = (
  courses: Courses,
): GetCoursesSuccessActionType => ({
  type: GET_COURSES_SUCCESS,
  payload: courses,
});
