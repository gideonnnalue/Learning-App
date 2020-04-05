import reducer from './reducer';
import {GET_COURSES, GET_COURSES_SUCCESS} from './actionTypes';

describe('course reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({allCourses: []});
  });

  it('should handle get all courses success', () => {
    expect(
      reducer({}, {type: GET_COURSES_SUCCESS, payload: [1, 2, 3]}),
    ).toEqual({allCourses: [1, 2, 3]});
  });
});
