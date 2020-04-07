export interface Props {
  courseId: number;
  courseImg: string;
  courseName: string;
  navigate: (id: any) => void;
  saveCourse: (id: number) => void;
  isSaved: boolean;
}
