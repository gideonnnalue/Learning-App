import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Bar';

function secondsToTime(time) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
}

const CourseIntro = () => {
  const [error, setError] = useState(false);
  const [buffering, setBuffering] = useState(true);
  const [animated, setAnimated] = useState(new Animated.Value(0));
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [player, setPlayer] = useState(undefined);

  let playerRef = null;
  let loopingAnimation = null;
  const onBuffer = meta => {
    meta.isBuffering && triggerBufferAnimation();

    if (loopingAnimation && !meta.isBuffering) {
      loopingAnimation.stopAnimation();
    }

    setBuffering(meta.isBuffering);
  };

  const videoError = meta => {
    console.log(meta);
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

  const handleLoad = meta => {
    setDuration(meta.duration);
  };
  const handleProgress = prog => {
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
    <View style={styles.screen}>
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri:
              'https://res.cloudinary.com/djhbhzex4/video/upload/v1585410558/learningApp/video_kfu80k.mp4',
          }} // Can be a URL or a local file.
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
          resizeMode="cover"
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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

export default CourseIntro;
