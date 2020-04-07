import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

// Components
import {CourseModules} from '../components/courseModules';

import {actions} from '../components/allCourses';
const {viewModule} = actions;

const CourseModulesScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {courseId} = route.params;
  const quizScreenNavigate = data => {
    if (
      data.type === 'article' ||
      data.type === 'video' ||
      data.type === 'pdf'
    ) {
      dispatch(viewModule(courseId, data.id))
      navigation.navigate('CourseViewScreen', data);
    } else {
      dispatch(viewModule(courseId, data.id))
      navigation.navigate('QuizScreen', data);
    }
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
