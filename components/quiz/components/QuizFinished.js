import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// Questions
import questions from './questions';

// StyleSheet
import styles from './styles';

const QuizFinished = ({totalScore}) => {
  const formatResponse = () => {
    const percentage = Math.ceil((totalScore / questions.length) * 100);
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
