import React from 'react';
import {View, Text} from 'react-native';

// StyleSheet
import styles from './styles';
//Types
import {CourseContentProps} from '../types';

const CourseViewArticle = ({data}: CourseContentProps) => {
  return (
    <View style={styles.articleContainer}>
      <Text>{data}</Text>
    </View>
  );
};

export default CourseViewArticle;
