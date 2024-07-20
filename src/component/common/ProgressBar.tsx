import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AuthHeader from './AuthHeader'; // Adjust the import based on your file structure
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';

const ProgressBar = ({ currentIndex }) => {
  const [activeIndex, setActiveIndex] = useState(3); // Start at 4 times/week

  const handleDotPress = (index) => {
    setActiveIndex(index);
  };

  const renderDots = () => {
    return Array.from({ length: 7 }).map((_, index) => (
      <React.Fragment key={index}>
        {index > 0 && (
          <View
            style={[
              styles.line,
              index <= activeIndex ? styles.activeLine : styles.inactiveLine,
            ]}
          />
        )}
        <TouchableOpacity
          style={[
            styles.dot,
            index <= activeIndex ? styles.activeDot : styles.inactiveDot,
          ]}
          onPress={() => handleDotPress(index)}
        />
      </React.Fragment>
    ));
  };

  return (
    <View>
      {currentIndex === 6 && (
        <View>
          <AuthHeader
            viewStyle={styles.heading}
            text1={'workout'}
            upperTextStyle={{ color: COLORS.yellow }}
          />
          <View style={styles.container}>
            <Text style={styles.textWork}>{`${activeIndex + 1} Times / Week`}</Text>
            <View style={styles.progressBar}>
              {renderDots()}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 11,
  },
  heading: {
    marginBottom: 10,
  },
  textWork: {
    color: COLORS.white,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: FONTS.interRegular,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  activeDot: {
    backgroundColor: COLORS.yellow,
  },
  inactiveDot: {
    backgroundColor: COLORS.white,
  },
  line: {
    height: 2,
    flex: 1,
  },
  activeLine: {
    backgroundColor: COLORS.yellow,
  },
  inactiveLine: {
    backgroundColor: COLORS.white,
  },
});

export default ProgressBar;
