import React, {useState, Fragment} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// StyleSheet
import styles from './styles';

const Question = ({
  currentQues,
  question,
  options,
  selectAnswer,
  correctAnswer,
  correctState,
}) => {
  const [clicked, setClicked] = useState(0);
  const questOptions = Object.keys(options).map(key => {
    let calcBackground;
    let calcText;

    if (correctState === 'correct' && correctAnswer === key) {
      calcBackground = 'green';
      calcText = 'white';
    }

    if (correctState === 'wrong' && clicked === key) {
      calcBackground = 'red';
      calcText = 'white';
    }

    if (correctState === 'wrong' && correctAnswer === key) {
      calcBackground = 'green';
      calcText = 'white';
    }
    return (
      <TouchableOpacity
        key={key}
        style={{
          ...styles.optionTxtContainer,
          backgroundColor: calcBackground,
        }}
        onPress={() => {
          selectAnswer(key);
          setClicked(key);
        }}
        disabled={correctState ? true : false}>
        <Text
          style={{
            ...styles.optionTxt,
            color: calcText,
          }}>{`${key}. ${options[key]}`}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <Fragment>
      <Text style={styles.questionTxt}>
        {`${currentQues + 1}. ${question}`}
      </Text>
      <View style={styles.optionsContainer}>{questOptions}</View>
    </Fragment>
  );
};

export default Question;
