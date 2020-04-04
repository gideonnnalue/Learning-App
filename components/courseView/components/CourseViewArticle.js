import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CourseViewArticle = ({data}) => {
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
});

export default CourseViewArticle;
