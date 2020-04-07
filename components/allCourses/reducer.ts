import {
  GET_COURSES_SUCCESS,
  SAVE_COURSE_SUCCESS,
  VIEW_MODULE_SUCCESS,
} from './actionTypes';

import * as types from './types';

const INITIAL_STATE: types.ReducerInterface = {
  allCourses: [],
  savedCourses: [],
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_COURSES_SUCCESS:
      const newPayload = formatCourses(payload);
      return {...state, allCourses: newPayload};
    case SAVE_COURSE_SUCCESS:
      const newSavedCourses = saveNewCourses(state, payload);
      return {...state, savedCourses: newSavedCourses};
    case VIEW_MODULE_SUCCESS:
      const allCourses = setViewedModules(state, payload);
      return {...state, allCourses};
    default:
      return state;
  }
};

const formatCourses = (payload: types.Courses): types.Courses => {
  let newPayload: types.Courses = [];
  for (let data of payload) {
    data.viewedCourses = [];
    newPayload.push(data);
  }
  return newPayload;
};

const saveNewCourses = (
  state: types.ReducerInterface,
  payload: number,
): number[] => {
  let newState: types.ReducerInterface = {...state};
  let newSavedCourses: number[];
  if (newState.savedCourses.includes(payload)) {
    newSavedCourses = newState.savedCourses.filter(id => id !== payload);
  } else {
    newSavedCourses = [...newState.savedCourses, payload];
  }
  return newSavedCourses;
};

const setViewedModules = (
  state: types.ReducerInterface,
  payload: types.ModulesInterface,
): types.Courses => {
  const allCourses: types.Courses = [...state.allCourses];
  let currentCourse: types.Course = allCourses.filter(
    course => course.id === payload.courseId,
  )[0];
  if (!currentCourse.viewedCourses.includes(payload.id)) {
    currentCourse.viewedCourses.push(payload.id);
  }
  const courseIndex: number = allCourses.findIndex(
    course => course.id === payload.courseId,
  );
  allCourses[courseIndex] = currentCourse;
  return allCourses;
};
