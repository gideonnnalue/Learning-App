import reducer from './reducer';
import {GET_COURSE, GET_COURSE_SUCCESS} from './actionTypes';

describe('course reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({course: null});
  });

  it('should handle get course success', () => {
    expect(
      reducer({}, {type: GET_COURSE_SUCCESS, payload: {data: 1}}),
    ).toEqual({course: {data: 1}});
  });
});
