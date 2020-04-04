import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import {CourseModules} from '../components/courseModules';

const CourseModulesScreen = ({navigation}) => {
  const quizScreenNavigate = data => {
    console.log(data);
    if (data.type === 'article' || data.type === 'video' || data.type === 'pdf')
      navigation.navigate('CourseViewScreen', data);
    else navigation.navigate('QuizScreen', data);
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
