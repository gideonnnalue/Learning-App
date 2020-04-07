import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  itemBtn: {
    marginTop: 10,
  },
  itemContainer: {
    padding: 10,
    borderRadius: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    color: Colors.primary,
    fontSize: 16,
  },
  itemType: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    marginRight: 10
  },
  centered: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
