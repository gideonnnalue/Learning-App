import React from 'react';
import {View, Text} from 'react-native';

// Components
import CourseViewArticle from './CourseViewArticle';
import CourseViewVideo from './CourseViewVideo';
import CourseViewPDF from './CourseViewPDF';

// StyleSheet
import styles from './styles';
//Types
import {CourseViewProps} from '../types';

const CourseView = ({data}: CourseViewProps) => {
  if (data.type === 'article') return <CourseViewArticle data={data.content} />;
  if (data.type === 'video') return <CourseViewVideo data={data.content} />;
  if (data.type === 'pdf') return <CourseViewPDF data={data.content} />;
  return (
    <View style={styles.centered}>
      <Text>Invalid File Type</Text>
    </View>
  );
};

export default CourseView;
