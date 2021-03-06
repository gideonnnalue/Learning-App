import React, {useState} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

// StyleSheet
import styles from './styles';
// Types
import {VideoProps} from '../types';

function secondsToTime(time: number) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
}

const VideoComponent = ({courseLink, videoMode}: VideoProps) => {
  const [error, setError] = useState<boolean | string>(false);
  const [buffering, setBuffering] = useState<boolean>(true);
  const [animated, setAnimated] = useState(new Animated.Value(0));
  const [paused, setPaused] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [player, setPlayer] = useState(undefined);

  let playerRef: any = null;
  let loopingAnimation: any = null;
  const onBuffer = (meta: any) => {
    meta.isBuffering && triggerBufferAnimation();

    if (loopingAnimation && !meta.isBuffering) {
      loopingAnimation.stopAnimation();
    }

    setBuffering(meta.isBuffering);
  };

  const videoError = (meta: {error: any}) => {
    const {
      error: {code},
    } = meta;
    let error = 'An error occured playing this video';

    switch (code) {
      case -11800:
        error = 'Could not load video from URL';
        break;
    }
    setError(error);
  };

  const handleLoadStart = () => {
    triggerBufferAnimation();
  };

  const triggerBufferAnimation = () => {
    loopingAnimation = Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 350,
      }),
    ).start();
  };
  const interpolatedAnimation = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rotateStyle = {
    transform: [{rotate: interpolatedAnimation}],
  };

  const handleLoad = (meta: {duration: number}) => {
    setDuration(meta.duration);
  };
  const handleProgress = (prog: {currentTime: number}) => {
    setProgress(prog.currentTime / duration);
  };
  const handleEnd = () => {
    setPaused(true);
  };
  const handleMainButtonTouch = () => {
    if (progress >= 1) {
      playerRef.seek(0);
    }
    setPaused(!paused);
  };
  const handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * duration;
    playerRef.seek(progress);
  };
  return (
    <View
      style={
        videoMode === 'half'
          ? styles.videoContainerHalf
          : styles.videoContainerFull
      }>
      <Video
        source={{
          uri: courseLink,
        }}
        ref={ref => {
          playerRef = ref;
        }}
        paused={paused}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onProgress={handleProgress}
        onEnd={handleEnd}
        onBuffer={onBuffer}
        onError={videoError}
        style={styles.videoPanel}
        resizeMode="contain"
      />
      <View style={styles.videoControls}>
        <TouchableWithoutFeedback onPress={handleMainButtonTouch}>
          <Icon name={!paused ? 'pause' : 'play'} size={30} color="#fff" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleProgressPress}>
          <View>
            <ProgressBar
              progress={progress}
              color="#fff"
              unfilledColor="rgba(255, 255, 255, 0.5)"
              borderColor="#fff"
              width={250}
              height={20}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.videoDuration}>
          {secondsToTime(Math.floor(progress * duration))}
        </Text>
      </View>
      {buffering && (
        <View
          style={{
            ...styles.videoCover,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}>
          <Animated.View style={rotateStyle}>
            <Icon name="circle-o-notch" size={30} color="#fff" />
          </Animated.View>
        </View>
      )}

      {error && (
        <View style={styles.videoCover}>
          <Icon name="exclamation-triangle" size={30} color="red" />
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default VideoComponent;
