import React from 'react';
import {View, StyleSheet, Text as NativeText} from 'react-native';
import {Button, Text} from 'native-base';

// StyleSheet
import styles from './styles';

const StartPage = props => {
  const {changeQuizState} = props;
  return (
    <View style={styles.container2}>
      <NativeText style={styles.startText}>Start Quiz</NativeText>
      <NativeText style={styles.descText}>
        Once Quiz begins do not leave the screen until you finish
      </NativeText>
      <View style={styles.buttonContainer}>
        <Button block onPress={changeQuizState.bind(this, 'runnng')}>
          <Text>Start</Text>
        </Button>
      </View>
    </View>
  );
};

export default StartPage;
