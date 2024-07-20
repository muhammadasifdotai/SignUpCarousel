import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';

const SignUpCarouselItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SignUpCarouselItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex: 1,
    justifyContent: 'center',
  },
  description: {
    color: COLORS.background,
    fontFamily: FONTS.interLight,
    fontSize: 16,
    textAlign: 'center',
  },
  // image: {
  //   // flex: 0.7,
  //   justifyContent: 'center',
  //   width: '100%',
  // },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.interLight,
    fontSize: 32,
    marginVertical: 20,
    textAlign: 'center',
  },
});
