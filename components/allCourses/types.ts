import {GET_COURSES, GET_COURSES_SUCCESS} from './actionTypes';

export interface Props {
  navigate: (id: any) => void;
}

export interface Item {
  title: string;
  image: string;
  id: number;
}

export interface BriefInfoItems {
  title: string;
  content: string;
}

export interface CourseModules {
  id: number;
  name: string;
  type: string;
  content: string | object;
}

export interface Course {
  id: number;
  image: string;
  title: string;
  introVideoLink: string;
  briefInfo: BriefInfoItems[];
  courseModules: CourseModules[];
  viewedCourses: number[];
}

export type Courses = Course[];

export interface GetCoursesActionType {
  type: typeof GET_COURSES;
}

export interface GetCoursesSuccessActionType {
  type: typeof GET_COURSES_SUCCESS;
  payload: Courses;
}

export interface ReducerInterface {
  allCourses: Courses;
  savedCourses: number[];
}

export interface ModulesInterface {
  courseId: number;
  id: number;
}
