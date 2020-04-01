import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import {CourseModules} from '../components/courseModules';

const CourseModulesScreen = ({navigation}) => {
  const quizScreenNavigate = () => {
    navigation.navigate('QuizScreen');
  };
  return (
    <View style={styles.screen}>
      <CourseModules navigate={quizScreenNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CourseModulesScreen;
