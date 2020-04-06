import React, {useState} from 'react';

// Components
import StartPage from './StartPage';
import QuizGame from './QuizGame';
import QuizFinished from './QuizFinished';

// Types
import {QuizProps} from '../types';

const Quiz = ({questions}: QuizProps) => {
  const [quizState, setQuizState] = useState<string>('init');
  const [totalScore, setTotalScore] = useState<number>(0);

  const changeQuizState = (state: string) => setQuizState(state);
  const changeTotalScore = (score: number) => setTotalScore(score);

  if (quizState === 'init')
    return <StartPage changeQuizState={(state) => changeQuizState(state)} />;
  if (quizState === 'finished')
    return (
      <QuizFinished
        totalScore={totalScore}
        questions={questions}
      />
    );
  return (
    <QuizGame
      changeQuizState={(state) => changeQuizState(state)}
      changeTotalScore={(score) => changeTotalScore(score)}
      questions={questions}
    />
  );
};
export default Quiz;
