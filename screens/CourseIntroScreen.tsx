import React from 'react';
import {View} from 'react-native';

// Component
import {CourseIntro} from '../components/course';

const CourseIntroScreen = ({navigation, route}) => {
  console.disableYellowBox = true;
  const {courseId} = route.params;
  const courseModuleNavigate = (id) => {
    navigation.navigate('CourseModulesScreen', {courseId: id});
  };
  return (
    <View>
      <CourseIntro navigate={(id) => courseModuleNavigate(id)} courseId={courseId} />
    </View>
  );
};

export default CourseIntroScreen;
