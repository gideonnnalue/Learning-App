import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    height: 200,
  },
  videoPanel: {
    width: '100%',
    height: '100%',
  },
  videoCover: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  videoControls: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  videoDuration: {
    color: '#FFF',
    marginLeft: 15,
  },
});

export default styles;
