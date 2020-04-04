import React from 'react';
import {View, Text} from 'react-native';

// StyleSheet
import styles from './styles';

const CourseViewArticle = ({data}) => {
  return (
    <View style={styles.articleContainer}>
      <Text>{data}</Text>
    </View>
  );
};

export default CourseViewArticle;
