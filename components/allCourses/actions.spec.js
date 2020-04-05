import {GET_COURSES, GET_COURSES_SUCCESS} from './actionTypes';
import {getCourses, getCoursesSuccess} from './actions';

describe('Get Course Actions', () => {
  it('should get all courses', () => {
    const expectedAction = {
      type: GET_COURSES,
    };
    expect(getCourses()).toEqual(expectedAction);
  });

  it('should get all courses successfully', () => {
    const course = {data: 1};
    const expectedAction = {
      type: GET_COURSES_SUCCESS,
      payload: course,
    };
    expect(getCoursesSuccess(course)).toEqual(expectedAction);
  });
});
