import {GET_COURSES, GET_COURSES_SUCCESS} from './actionTypes';

export interface Props {
  navigate: () => void;
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
}

export interface Courses {
  courses: Course[];
}

export interface GetCoursesActionType {
  type: typeof GET_COURSES;
}

export interface GetCoursesSuccessActionType {
  type: typeof GET_COURSES_SUCCESS;
  payload: Courses;
}
