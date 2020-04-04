import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Component
import {CourseView} from '../components/courseView';

const CourseViewScreen = ({route, navigation}) => {
  navigation.setOptions({
    headerTitle: route.params.name,
  });
  return <CourseView data={route.params} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CourseViewScreen;
