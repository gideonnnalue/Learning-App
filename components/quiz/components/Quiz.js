import React, {useState} from 'react';

// Components
import StartPage from './StartPage';
import QuizGame from './QuizGame';
import QuizFinished from './QuizFinished';

const Quiz = ({questions}) => {
  const [quizState, setQuizState] = useState('init');
  const [totalScore, setTotalScore] = useState(0);

  const changeQuizState = state => setQuizState(state);
  const changeTotalScore = score => setTotalScore(score);

  if (quizState === 'init')
    return <StartPage changeQuizState={state => changeQuizState(state)} />;
  if (quizState === 'finished')
    return (
      <QuizFinished
        changeQuizState={state => changeQuizState(state)}
        totalScore={totalScore}
        questions={questions}
      />
    );
  return (
    <QuizGame
      changeQuizState={state => changeQuizState(state)}
      changeTotalScore={score => changeTotalScore(score)}
      questions={questions}
    />
  );
};
export default Quiz;
