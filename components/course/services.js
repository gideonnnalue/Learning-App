import response from '../../DATA/courses.js';

export const getCourseService = id => {
  const data = response.data.filter(data => data.id === id);
  return data[0];
};
