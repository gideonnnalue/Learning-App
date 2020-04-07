import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, View, ScrollView, SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';

// Components
import {Video} from '../../video';
import OverviewAccordion from './OverviewAccordion';

import {getCourse} from '../actions';

// Style
import styles from './styles';
import Colors from '../../../constants/Colors';
// Types
import {CourseIntroProps, CourseItem} from '../types';

const CourseIntro = ({courseId, navigate}: CourseIntroProps) => {
  const dispatch = useDispatch();
  const {course} = useSelector<object>(state => state.course);

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch]);

  if (!course) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  const {title, introVideoLink, briefInfo}: CourseItem = course;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.screen}>
        <Video courseLink={introVideoLink} videoMode="half" />
        <View style={styles.detailsContainer}>
          <Text style={styles.descText}>Description</Text>
          <Text style={styles.titleText}>
            Title: <Text style={styles.titleDesc}>{title}</Text>
          </Text>
          <OverviewAccordion dataArray={briefInfo} />
          <View style={styles.buttonContainer}>
            <Button block onPress={navigate}>
              <Text>Start Lesson</Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourseIntro;
