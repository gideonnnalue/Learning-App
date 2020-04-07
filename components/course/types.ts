import {GET_COURSE, GET_COURSE_SUCCESS} from './actionTypes';
import {types as courseTypes} from '../allCourses';

export interface CourseIntroProps {
  courseId: number;
  navigate: () => void;
}

export interface CourseItem {
  title: string;
  introVideoLink: string;
  briefInfo: object[];
}

export interface AccordionProps {
  dataArray: object[];
}

export interface GetCourseActionType {
  type: typeof GET_COURSE;
  id: number;
}

export interface GetCourseSuccessActionType {
  type: typeof GET_COURSE_SUCCESS;
  payload: courseTypes.Course;
}

export type CourseActionsType =
  | GetCourseSuccessActionType
  | GetCourseActionType;
