export interface CourseDataInterface {
  content: string | object;
  id: number;
  name: string;
  type: string;
}

export interface CourseViewProps {
  data: CourseDataInterface;
}

export interface CourseContentProps {
  data: string;
}
