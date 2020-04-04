import React from 'react';
import {View} from 'react-native';

// Component
import {CourseIntro} from '../components/course';

const CourseIntroScreen = ({navigation, route}) => {
  const {courseId} = route.params;
  const courseModuleNavigate = () => {
    navigation.navigate('CourseModulesScreen');
  };
  return (
    <View>
      <CourseIntro navigate={courseModuleNavigate} courseId={courseId} />
    </View>
  );
};

export default CourseIntroScreen;
