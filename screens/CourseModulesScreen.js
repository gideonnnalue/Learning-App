import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import {CourseModules} from '../components/courseModules';

const CourseModulesScreen = ({navigation}) => {
  const courseModuleNavigate = () => {
    navigation.navigate('CourseModulesScreen');
  };
  //   navigate={courseModuleNavigate}
  return (
    <View style={styles.screen}>
      <CourseModules />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CourseModulesScreen;
