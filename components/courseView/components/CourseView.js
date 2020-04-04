import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

// Components
import CourseViewArticle from './CourseViewArticle';
import CourseViewVideo from './CourseViewVideo';
import CourseViewPDF from './CourseViewPDF';

const CourseView = ({data}) => {
  if (data.type === 'article') return <CourseViewArticle data={data.content} />;
  if (data.type === 'video') return <CourseViewVideo data={data.content} />;
  if (data.type === 'pdf') return <CourseViewPDF data={data.content} />;
  return (
    <View style={styles.container}>
      <Text>Invalid File Type</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CourseView;
