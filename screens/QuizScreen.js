import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Component
import {Quiz} from '../components/quiz';

const QuizScreen = () => {
  return (
    <View styles={styles.screen}>
      <Quiz />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default QuizScreen;
