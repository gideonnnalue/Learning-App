import React from 'react';
import {View, Text} from 'react-native';

// Component
import {Video} from '../../video';

const CourseViewVideo = ({data}) => {
  return (
    <View>
      <Video courseLink={data} videoMode="full" />
    </View>
  );
};

export default CourseViewVideo;
