import React from 'react';
import {View, Text} from 'react-native';

// Component
import {CourseIntro} from '../components/course';

const CourseIntroScreen = ({navigation}) => {
  const courseModuleNavigate = () => {
    navigation.navigate('CourseModulesScreen');
  };
  return (
    <View>
      <CourseIntro navigate={courseModuleNavigate} />
    </View>
  );
};

export default CourseIntroScreen;
