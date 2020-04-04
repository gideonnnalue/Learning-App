import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

// StyleSheet
import styles from './styles';
import Colors from '../../../constants/Colors';

const CourseModules = props => {
  const {course} = useSelector(state => state.course);

  if (!course) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  const {courseModules} = course;
  return (
    <ScrollView>
      <View style={styles.screen}>
        {courseModules.map(module => (
          <TouchableOpacity
            key={module.id}
            style={styles.itemBtn}
            onPress={props.navigate.bind(this, module)}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{module.name}</Text>
              <Text style={styles.itemType}>{module.type}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CourseModules;
