import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  detailsContainer: {
    padding: 10,
  },
  descText: {
    fontSize: 18,
    marginBottom: 10,
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  titleDesc: {
    color: Colors.primary,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default styles;