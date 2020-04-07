import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button, Card, CardItem, Body, Text} from 'native-base';

interface Props {
  courseId: string;
  courseImg: string;
  courseName: string;
  navigate: () => void;
}

const CourseCard = ({courseId, courseImg, courseName, navigate}: Props) => {
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
            <Button block onPress={navigate.bind(this, courseId)}>
              <Text>Start Lesson</Text>
            </Button>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default CourseCard;
