import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme';
import { FONTS } from '../../assets/fonts';

const SignUpCarouselNextButton = ({ scrollTo }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={scrollTo} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('LoginScreen')}
          style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpCarouselNextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex: 1,
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: COLORS.background,
    borderRadius: 30,
    marginBottom: 15,
    padding: 15,
    width: 300,
  },
  nextButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.interLight,
    textAlign: 'center',
  },
  skipButton: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.background,
    backgroundColor: COLORS.background,
    padding: 15,
  },
  skipButtonText: {
    color: COLORS.background,
    fontFamily: FONTS.interLight,
    textAlign: 'center',
  },
});
