import React, {useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Text} from 'native-base';

// Components
import {Video} from '../../video';
import OverviewAccordion from './OverviewAccordion';

// Style
import styles from './styles';

const CourseIntro = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Video />
        <View style={styles.detailsContainer}>
          <Text style={styles.descText}>Description</Text>
          <Text style={styles.titleText}>
            Title:{' '}
            <Text style={styles.titleDesc}>
              Introduction to Blockchain and Cryptocurrency
            </Text>
          </Text>
          <OverviewAccordion />
          <View style={styles.buttonContainer}>
            <Button block onPress={props.navigate}>
              <Text>Start Lesson</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CourseIntro;
