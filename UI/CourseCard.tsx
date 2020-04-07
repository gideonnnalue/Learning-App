import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Card, CardItem, Body, Text} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Types
import {Props} from './types';


const CourseCard = ({courseId, courseImg, courseName, navigate, saveCourse, isSaved}: Props) => {
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{uri: courseImg}}
          style={{height: 100, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text>{courseName}</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.startBtn} block onPress={() => navigate(courseId)}>
              <Text>Start Lesson</Text>
            </Button>
            <TouchableOpacity style={styles.saveBtn} onPress={() => saveCourse(courseId)}>
              <Text><Icon name={isSaved ? "heart" : "heart-o"} size={30} color="red" /></Text>
            </TouchableOpacity>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startBtn: {
    width: '85%'
  },
  saveBtn: {
    // width: '28%',
  }
});

export default CourseCard;
