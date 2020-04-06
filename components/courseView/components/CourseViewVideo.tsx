import React from 'react';
import {View, Text} from 'react-native';

// Component
import {Video} from '../../video';
//Types
import {CourseContentProps} from '../types';

const CourseViewVideo = ({data}: CourseContentProps) => {
  return (
    <View>
      <Video courseLink={data} videoMode="full" />
    </View>
  );
};

export default CourseViewVideo;
