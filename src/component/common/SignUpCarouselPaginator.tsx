import { View, Animated, useWindowDimensions, StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../../theme';

const SignUpCarouselPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [35.33, 35.33, 35.33],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [COLORS.white, COLORS.yellow, COLORS.white],
            extrapolate: 'clamp',
          });

          return (
            <View key={i.toString()}>
              <Animated.View
                style={[styles.dot, { width: dotWidth, opacity, backgroundColor }]}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.stepTextContainer}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const stepTextOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`stepText-${i}`}
              style={[styles.stepTextWrapper, { opacity: stepTextOpacity }]}
            >
              <Text style={styles.stepText}>
                <Text style={styles.activeStepText}>{`step${i + 1}`}</Text>
                <Text style={styles.totalStepText}>{`/${data.length}`}</Text>
              </Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default SignUpCarouselPaginator;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: COLORS.yellow,
    height: 5,
    marginTop: 11,
  },
  stepTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  stepTextWrapper: {
    position: 'absolute',
  },
  stepText: {
    fontSize: 12,
  },
  activeStepText: {
    color: COLORS.yellow,
  },
  totalStepText: {
    color: COLORS.white,
  },
});
