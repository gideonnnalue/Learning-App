import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

// StyleSheet
import styles from './styles';
import Colors from '../../../constants/Colors';
// Types
import {CourseModuleProps} from '../types';

const CourseModules = ({navigate}: CourseModuleProps) => {
  const {course} = useSelector(state => state.course);
  if (!course) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  const {courseModules, viewedCourses} = course;

  return (
    <ScrollView>
      <View style={styles.screen}>
        {courseModules.map(module => (
          <TouchableOpacity
            key={module.id}
            style={styles.itemBtn}
            onPress={() => navigate(module)}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{module.name}</Text>
              <View style={styles.leftContainer}>
                <Text style={styles.itemType}>{module.type}</Text>
                {viewedCourses.includes(module.id) ? (
                  <Icon name="check" size={20} color="green" />
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CourseModules;
