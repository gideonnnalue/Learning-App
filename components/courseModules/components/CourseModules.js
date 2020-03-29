import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// StyleSheet
import styles from './styles';

const modules = [
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
  {name: 'Introduction', type: 'article'},
];

const CourseModules = () => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        {modules.map((module, i) => (
          <TouchableOpacity key={i} style={styles.itemBtn}>
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
