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
  {name: 'Key Concepts: Part 1', type: 'article', content: 'blah blah blah'},
  {
    name: 'Key Concepts: Part 2',
    type: 'video',
    content: 'blah blah blah yeha yeha meem',
  },
  {
    name: 'Long and Short Positions',
    type: 'article',
    content: 'blah blah blah shit hsie kskss;; ksks',
  },
  {name: 'What is Arbitrage?', type: 'article', content: ' damn andmmmd nsnns'},
  {name: 'Range Trading', type: 'video', content: 'me andn uookk'},
  {name: 'Day Trading', type: 'pdf', content: 'dumb dllsl'},
  {name: 'Swing Trading', type: 'article', content: 'blueuuwew'},
  {name: 'Quiz', type: 'quiz'},
];

const CourseModules = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        {modules.map((module, i) => (
          <TouchableOpacity
            key={i}
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
