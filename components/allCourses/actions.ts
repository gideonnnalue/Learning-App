import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  SAVE_COURSE,
  SAVE_COURSE_SUCCESS,
  VIEW_MODULE,
  VIEW_MODULE_SUCCESS,
} from './actionTypes';
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
export const saveCourse = (id: number) => ({type: SAVE_COURSE, id});
export const saveCourseSuccess = (id: number) => ({
  type: SAVE_COURSE_SUCCESS,
  payload: id,
});
export const viewModule = (courseId: number, id: number) => ({
  type: VIEW_MODULE,
  courseId,
  id,
});
export const viewModuleSuccess = (courseId: number, id: number) => ({
  type: VIEW_MODULE_SUCCESS,
  payload: {courseId, id}
});
