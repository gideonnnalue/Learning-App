export interface QuestionInterface {
  quest: string;
  options: object;
  ans: string;
}

export interface QuizProps {
  changeQuizState: Function;
  changeTotalScore: Function;
  questions: QuestionInterface[];
}

export interface QuestionProps {
  currentQues: number;
  question: string;
  options: object;
  selectAnswer: Function;
  correctAnswer: string;
  correctState?: string | undefined;
}

export interface QuizProps {
    questions: QuestionInterface[];
}

export interface QuizFinishedProps {
    totalScore: number;
    questions: QuestionInterface[];
}