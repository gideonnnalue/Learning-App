import {GET_COURSE, GET_COURSE_SUCCESS} from './actionTypes';
import {getCourse, getCourseSuccess} from './actions';

describe('Get Course Actions', () => {
  it('should get a course by id', () => {
    const id = 1;
    const expectedAction = {
      type: GET_COURSE,
      id,
    };
    expect(getCourse(id)).toEqual(expectedAction);
  });

  it('should get a course successfully', () => {
    const course = {data: 1};
    const expectedAction = {
      type: GET_COURSE_SUCCESS,
      payload: course,
    };
    expect(getCourseSuccess(course)).toEqual(expectedAction);
  });
});
