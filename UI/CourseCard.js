import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button, Card, CardItem, Body, Text} from 'native-base';

const CourseCard = props => {
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{uri: props.courseImg}}
          style={{height: 100, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text>{props.courseName}</Text>
          <View style={styles.buttonContainer}>
            <Button block onPress={props.navigate.bind(this, props.courseId)}>
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
