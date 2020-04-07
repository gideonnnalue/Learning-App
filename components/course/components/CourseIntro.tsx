import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, View, ScrollView, SafeAreaView} from 'react-native';
import {Button, Text} from 'native-base';
import * as Progress from 'react-native-progress';

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

  const calculatePercentage = () => {
    if (!course?.viewedCourses) return 0;
    let percentage: number;
    const courseModulesLength = course.courseModules.length;
    const viewedModulesLength = course.viewedCourses.length;
    percentage = (viewedModulesLength / courseModulesLength) * 100;
    return percentage;
  };

  const {title, introVideoLink, briefInfo}: CourseItem = course;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Video courseLink={introVideoLink} videoMode="half" />
        <View style={styles.detailsContainer}>
          <View style={{height: 60}}>
            <Text style={{marginBottom: 3}}>Progress</Text>
            <Progress.Bar
              progress={calculatePercentage() / 100}
              width={null}
              height={10}
              color={Colors.primary}
              borderColor={Colors.primary}
            />
            <Text
              style={{
                color: Colors.primary,
              }}>{`${calculatePercentage()}%`}</Text>
          </View>
          <Text style={styles.descText}>Description</Text>
          <Text style={styles.titleText}>
            Title: <Text style={styles.titleDesc}>{title}</Text>
          </Text>
          <OverviewAccordion dataArray={briefInfo} />
          <View style={styles.buttonContainer}>
            <Button block onPress={() => navigate(courseId)}>
              <Text>Start Lesson</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CourseIntro;
