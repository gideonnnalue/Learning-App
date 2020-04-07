import React from 'react';
import {View, Text} from 'react-native';

// Components
import {SavedCourses} from '../components/savedCourses';

const SavedCoursesScreen = ({navigation}) => {
    const courseIntroNavigate = id => {
        navigation.navigate('CourseIntroScreen', {courseId: id});
      };
    return (
        <View>
            <SavedCourses navigate={courseIntroNavigate} />
        </View>
    );
};

export default SavedCoursesScreen;