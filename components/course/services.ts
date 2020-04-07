import response from '../../DATA/courses';

export const getCourseService = (id: number) => {
  const data = response.data.filter(data => data.id === id);
  return data[0];
};
