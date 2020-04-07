import React from 'react';
import {View, StatusBar} from 'react-native';
import {AllCourses} from '../components/allCourses';

// Constants
import Colors from '../constants/Colors';

const AllCoursesScreen = ({navigation}) => {
  const courseIntroNavigate = id => {
    navigation.navigate('CourseIntroScreen', {courseId: id});
  };
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <AllCourses navigate={courseIntroNavigate} />
    </View>
  );
};

export default AllCoursesScreen;
