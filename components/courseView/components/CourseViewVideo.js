import React from 'react';
import {View, Text} from 'react-native';

// Component
import {Video} from '../../video';

const CourseViewVideo = () => {
  return (
    <View>
      <Video
        courseLink="https://res.cloudinary.com/djhbhzex4/video/upload/v1585410558/learningApp/video_kfu80k.mp4"
        videoMode="full"
      />
    </View>
  );
};

export default CourseViewVideo;
