import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';

// Component
import Question from './Question';
// StyleSheet
import styles from './styles';
// Types
import {QuizProps} from '../types';


const QuizGame = ({changeQuizState, changeTotalScore, questions}: QuizProps) => {
  const [currentQues, setCurrentQues] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [currentQuestionState, setCurrentQuestionState] = useState<string | undefined>();

  const onNextQuestion = () => {
    if (currentQues >= questions.length - 1) {
      changeTotalScore(currentScore);
      changeQuizState('finished');
      return;
    }
    setCurrentQuestionState(undefined);
    setCurrentQues(currentQues + 1);
  };

  const checkAnswer = (selected: string) => {
    if (selected === questions[currentQues].ans) {
      setCurrentScore(currentScore + 1);
      setCurrentQuestionState('correct');
    } else {
      setCurrentQuestionState('wrong');
    }
  };

  const ansStatement = () => {
    if (currentQuestionState === 'wrong')
      return <Text style={styles.wrongAnswer}>Wrong answer</Text>;
    else if (currentQuestionState === 'correct')
      return <Text style={styles.correctAnswer}>Correct answer</Text>;
    return;
  };

  return (
    <View style={styles.container}>
      <Question
        currentQues={currentQues}
        question={questions[currentQues].quest}
        options={questions[currentQues].options}
        selectAnswer={checkAnswer}
        correctAnswer={questions[currentQues].ans}
        correctState={currentQuestionState}
      />
      {ansStatement()}
      {currentQuestionState && (
        <View>
          <Button block onPress={onNextQuestion}>
            <Text>Next</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default QuizGame;
