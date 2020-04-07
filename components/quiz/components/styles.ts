import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  startText: {
    fontSize: 24,
  },
  descText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  questionTxt: {
    fontSize: 20,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionTxtContainer: {
    elevation: 5,
    borderRadius: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 10,
    marginBottom: 5,
  },
  optionTxt: {
    fontSize: 18,
  },
  wrongAnswer: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  correctAnswer: {
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
  container2: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  badgeImage: {
    width: 120,
    height: 120,
  },
  heading: {
    fontSize: 24,
  },
  scoreTxt: {
    fontSize: 20,
  },
  ansTxt: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
