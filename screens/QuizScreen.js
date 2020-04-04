import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Component
import {Quiz} from '../components/quiz';

const QuizScreen = ({route}) => {
  const {content} = route.params;
  return (
    <View styles={styles.screen}>
      <Quiz questions={content.questions} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default QuizScreen;
