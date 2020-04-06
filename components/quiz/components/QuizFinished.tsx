import React from 'react';
import {View, Text, Image} from 'react-native';

// StyleSheet
import styles from './styles';
// Types
import {QuizFinishedProps} from '../types';

const QuizFinished = ({totalScore, questions}: QuizFinishedProps) => {
  const formatResponse = () => {
    const percentage: number = Math.ceil((totalScore / questions.length) * 100);
    if (percentage > 50) return 'Good Job';
    else return 'Nice Try!, You can do better';
  };
  return (
    <View style={styles.container2}>
      <Image
        source={require('../../../assets/images/best.png')}
        style={styles.badgeImage}
      />
      <Text style={styles.heading}>Quiz Complete</Text>
      <Text style={styles.scoreTxt}>
        {`You answered ${totalScore} out of ${questions.length} correctly`}
      </Text>
      <Text style={styles.ansTxt}>{formatResponse()}</Text>
    </View>
  );
};

export default QuizFinished;
