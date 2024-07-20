import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  // for gender screen 
  step: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: '#adff2f',
    fontSize: 24,
    marginBottom: 20,
  },
  genderContainer: {
    marginLeft: 80,
  },
  genderButtonMale: {
    backgroundColor: COLORS.lightBlackTwo,
    height: 60, 
    width: 318,
    flexDirection: 'row',
    paddingLeft: 22,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  genderButtonFemale: {
    backgroundColor: COLORS.lightBlackTwo,
    height: 60, 
    width: 318,
    flexDirection: 'row',
    paddingLeft: 22,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginTop: 33,
  },
  selectedGenderButton: {
    backgroundColor: '#adff2f',
  },
  genderButtonText: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    paddingLeft: 17,
  },
  female: {
    color: COLORS.whiteTwo,
    fontFamily: FONTS.interRegular,
    fontSize: 16,
    paddingLeft: 10,
  },
  iconMale: {
    paddingLeft: 370,
  },
  iconFemale: {
    paddingLeft: 335,
  },
  // end 

  // for age 
  ageminiContainer: {
    height: 346,
    padding: 22,
    width: 318,
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    marginHorizontal: 17,
  },
  ageButton: {
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    borderRadius: 5,
    alignItems: 'center',
    height: 60,
    width: 318,
    marginHorizontal: 37,
  },
  selectedText: {
    fontSize: 16,
    fontFamily: FONTS.interRegular,
    color: COLORS.whiteTwo,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  closeIcon: {
    width: 30,
    height: 30,
    // Add any additional styles for your SVG component
  },
  scrollView: {
    maxHeight: 280, // Adjust as needed
  },
  optionButton: {
    padding: 15,
    backgroundColor: COLORS.whiteThree,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 20,
    fontFamily: FONTS.interRegular,
    color: COLORS.whiteTwo,
  },
// 

  // for height 
  headingh: {
    alignItems: 'center',
    fontFamily: FONTS.rechargebd,
    justifyContent: 'center',
    color: COLORS.yellow,
    marginHorizontal: 22,
  },
  heightMiniContainer: {
    height: 346,
    padding: 22,
    width: 318,
    backgroundColor: COLORS.lightBlackTwo,
    borderRadius: 10,
    marginHorizontal: 17,
  },
  heightButton: {
    backgroundColor: COLORS.lightBlackTwo,
    borderColor: COLORS.white,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 17,
    borderRadius: 5,
    alignItems: 'center',
    height: 107,
    width: 318,
    marginHorizontal: 37,
    marginBottom: 40,
  },
  selectedTexth: {
    fontSize: 30,
    fontFamily: FONTS.interRegular,
    color: COLORS.whiteTwo,
  },
  modalContainerh: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalHeaderh: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  closeIconh: {
    width: 30,
    height: 30,
    // Add any additional styles for your SVG component
  },
  scrollViewh: {
    maxHeight: 280, // Adjust as needed
  },
  optionButtonh: {
    padding: 15,
    backgroundColor: COLORS.whiteThree,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  optionTexth: {
    fontSize: 20,
    fontFamily: FONTS.interRegular,
    color: COLORS.whiteTwo,
  },
// 

// for weight 

headingw: {
  alignItems: 'center',
  fontFamily: FONTS.rechargebd,
  justifyContent: 'center',
  color: COLORS.yellow,
  marginHorizontal: 22,
},
weightMiniContainer: {
  height: 346,
  padding: 22,
  width: 318,
  backgroundColor: COLORS.lightBlackTwo,
  borderRadius: 10,
  marginHorizontal: 17,
},
weightButton: {
  backgroundColor: COLORS.lightBlackTwo,
  borderColor: COLORS.white,
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  paddingHorizontal: 17,
  borderRadius: 5,
  alignItems: 'center',
  height: 107,
  width: 318,
  marginHorizontal: 37,
},
selectedTextw: {
  fontSize: 30,
  fontFamily: FONTS.interRegular,
  color: COLORS.whiteTwo,
},
modalContainerw: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: 20,
},
modalHeaderw: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginBottom: 10,
},
closeIconw: {
  width: 30,
  height: 30,
},
scrollVieww: {
  maxHeight: 280,
},
optionButtonw: {
  padding: 15,
  backgroundColor: COLORS.whiteThree,
  marginVertical: 5,
  borderRadius: 5,
  alignItems: 'center',
},
optionTextw: {
  fontSize: 20,
  fontFamily: FONTS.interRegular,
  color: COLORS.whiteTwo,
},


// 

// for goal
goalContainer: {
  marginLeft: 80,
},
goalButton: {
  backgroundColor: COLORS.lightBlackTwo,
  height: 60, 
  width: 318,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 22,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: COLORS.white,
  marginVertical: 15,
},
selectedGoalButton: {
  // backgroundColor: '#adff2f',
},
goalButtonText: {
  color: COLORS.whiteTwo,
  fontFamily: FONTS.interRegular,
  fontSize: 16,
  paddingLeft: 17,
},
iconGoal: {
  marginLeft: 'auto',
  paddingRight: 55,
},


// 

// for location
// for country
countryMiniContainer: {
  height: 346,
  padding: 22,
  width: 318,
  backgroundColor: COLORS.lightBlackTwo,
  borderRadius: 10,
  marginHorizontal: 17,
},
countryButton: {
  backgroundColor: COLORS.lightBlackTwo,
  borderColor: COLORS.white,
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 17,
  borderRadius: 5,
  alignItems: 'center',
  height: 60,
  width: 318,
  marginHorizontal: 37,
  marginTop: 17,
},


// for states
// for state
stateMiniContainer: {
  height: 346,
  padding: 22,
  width: 318,
  backgroundColor: COLORS.lightBlackTwo,
  borderRadius: 10,
  marginHorizontal: 17,
},
stateButton: {
  backgroundColor: COLORS.lightBlackTwo,
  borderColor: COLORS.white,
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 17,
  borderRadius: 5,
  alignItems: 'center',
  height: 60,
  width: 318,
  marginHorizontal: 37,
  marginTop: 17,
},

saveButton: {
  marginTop: 130,
},

// 

// for workout 

container: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  backgroundColor: '#222', // Dark background
},
textWork: {
  color: '#fff',
  marginBottom: 10,
  fontSize: 18,
},
progressBar: {
  flexDirection: 'row',
  alignItems: 'center',
},
dot: {
  width: 20,
  height: 20,
  borderRadius: 10,
  marginHorizontal: 5,
},
activeDot: {
  backgroundColor: '#c0ff00', // Active color
},
inactiveDot: {
  backgroundColor: '#fff', // Inactive color
},

//

//
  buttonStyle: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 40,
    marginTop: 15,
    textAlign: 'right',
  },
  forgot: {
    color: COLORS.whiteTwo,
  },
  heading: {
    alignItems: 'center',
    fontFamily: FONTS.rechargebd,
    justifyContent: 'center',
    color: COLORS.yellow
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(32, 32, 32, 0.9)',
  },
  svg: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.rechargebd,
  },
});

export default styles;
