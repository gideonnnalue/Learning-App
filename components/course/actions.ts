import {GET_COURSE, GET_COURSE_SUCCESS} from './actionTypes';
import {GetCourseActionType, GetCourseSuccessActionType} from './types';
import {types as courseTypes} from '../allCourses';

export const getCourse = (id: number): GetCourseActionType => ({type: GET_COURSE, id});
export const getCourseSuccess = (course: courseTypes.Course): GetCourseSuccessActionType => ({
  type: GET_COURSE_SUCCESS,
  payload: course,
});
