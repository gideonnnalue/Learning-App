import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {AllCourses} from '../components/allCourses';

// Constants
import Colors from '../constants/Colors';

const AllCoursesScreen = ({navigation}) => {
  console.log(typeof navigation)
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
