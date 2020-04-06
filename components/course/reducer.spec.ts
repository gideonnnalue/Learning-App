import reducer from './reducer';
import {GET_COURSE, GET_COURSE_SUCCESS} from './actionTypes';
import coursesData from '../../DATA/courses';

describe('course reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({course: null});
  });

  it('should handle get course success', () => {
    const course = coursesData.data[0];
    expect(
      reducer({course: null}, {type: GET_COURSE_SUCCESS, payload: course}),
    ).toEqual({course: course});
  });
});
