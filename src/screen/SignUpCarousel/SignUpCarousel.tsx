import React, { useRef, useState } from 'react';
import { Animated, FlatList, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { AppButton, AppScreen, AppText, AuthHeader, BackButton, InputTextLabel,ProgressBar,SignUpCarouselItem, SignUpCarouselNextButton, SignUpCarouselPaginator } from '../../components';
import Toast from 'react-native-simple-toast';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { ZodError } from 'zod';
import { loginSchema } from '../../utils/SchemaValidation';
import styles from './styles';
import { useAppStore } from '../../store';
import { signIn } from '../../store/authSlice/authApiService';
import { COLORS, CustomTheme } from '../../theme';
import { IMAGES, SVG } from '../../assets';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Slides from '../../components/common/SignUpCarouselSlides';

interface profileType {
  fillColor?: string;
  viewStyle?: ViewStyle;
}

export default function SignUpCarousel(props: profileType): JSX.Element {

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('Last item.');
    }
  };

  const { navigate, goBack } = useNavigation();
  /*
   ** States
   */
  const [firstName, setFirstName] = useState<string>('First Name');
  const [lastName, setLastName] = useState<string>('Last Name');
  const [gender, setGender] = useState('');

  const [emailAddress, setEmailAddress] = useState<string>('Email');
  const [password, setPassword] = useState<string>('Password');
  const [loading, setLoading] = useState<boolean>(false);

  const userData = useAppStore(state => state.userData);

  console.log('🚀 ~ LoginScreen ~ userData:', userData);

  // for age selection
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState('Age');

  const ages = Array.from({ length: 100 }, (_, i) => i + 18);

  const handleSelectAge = (age) => {
    setSelectedAge(age);
    setModalVisible(false);
  };

  // 

  // for height selection

  const [modalVisibleHeight, setModalVisibleHeight] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState("Height");
  
  const heights = Array.from({ length: 24 }, (_, i) => {
    const feet = Math.floor(i / 12) + 4;
    const inches = i % 12;
    return `${feet}’${inches}”`;
  });
  
  const handleSelectHeight = (height) => {
    setSelectedHeight(height);
    setModalVisibleHeight(false);
  };

// 

// for weight selection 

// State and Weight Data
const [modalVisibleWeight, setModalVisibleWeight] = useState(false);
const [selectedWeight, setSelectedWeight] = useState("Your Weight");

const weights = Array.from({ length: 250 }, (_, i) => `${i + 50} lb`);

// Handle Weight Selection
const handleSelectWeight = (weight) => {
  setSelectedWeight(weight);
  setModalVisibleWeight(false);
};


// 

// for goal 
// state
const [goal, setGoal] = useState('');

// 

// for fitness 
// state
const [fitness, setFitness] = useState('');

// 

// for workout 
// state
 const [activeIndex, setActiveIndex] = useState(3); // Start at 4 times/week

  const handleDotPress = (index) => {
    setActiveIndex(index);
  };


// 


// for location 
// for Country
// State and Data

const [modalVisibleC, setModalVisibleC] = useState(false);
const [selectedCountry, setSelectedCountry] = useState('Select Country');

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'India',
  'Germany', 'France', 'Italy', 'Spain', 'Brazil',
  'Mexico', 'Japan', 'China', 'Russia', 'South Africa',
  'South Korea', 'Netherlands', 'Sweden', 'Norway', 'Argentina',
  'New Zealand', 'Singapore', 'Switzerland', 'Turkey', 'Saudi Arabia',
  'United Arab Emirates', 'Thailand', 'Indonesia', 'Vietnam', 'Malaysia'
];


const handleSelectCountry = (country) => {
  setSelectedCountry(country);
  setModalVisibleC(false);
};
// for city
// State and Data

const [modalVisibleCity, setModalVisibleCity] = useState(false);
const [selectedCity, setSelectedCity] = useState('city');

const cities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', // United States
  'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', // Canada
  'London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', // United Kingdom
  'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', // Australia
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai' // India
];

const handleSelectCity = (city) => {
  setSelectedCity(city);
  setModalVisibleCity(false);
};
// for state
// State and Data

const [modalVisibleState, setModalVisibleState] = useState(false);
const [selectedState, setSelectedState] = useState('Select State');

const states = [
  'California', 'Texas', 'New York', 'Florida', 'Illinois', // United States
  'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', // Canada
  'England', 'Scotland', 'Wales', 'Northern Ireland', // United Kingdom
  'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', // Australia
  'Maharashtra', 'Tamil Nadu', 'Karnataka', 'Gujarat', 'Rajasthan' // India
];

const handleSelectState = (state) => {
  setSelectedState(state);
  setModalVisibleState(false);
};


// Location function
const onPressHome = (): void => {
  navigation.navigate('LoginScreen');
};

// 

  /*
   * Hooks
   */
  const navigation = useAppNavigation();
  const {colors} = useTheme() as CustomTheme;
  /*
   ** Props
   */
   const {fillColor = COLORS.whiteTwo, viewStyle = {}} = props;
  /*
   * Functions
   */
  /*
   *  Btn press to make user Login
   */
  const appBtnPress = async () => {
    try {
      const params = {
        email: emailAddress?.trim(),
        password,
      };
      loginSchema.parse(params);
      setLoading(true);
      // signing user in app
      await signIn(params);
      setLoading(false);
      console.log('params:', params);
    } catch (error: unknown | ZodError) {
      setLoading(false);
      if (error instanceof ZodError) {
        Toast.show(error?.issues[0]?.message, Toast.LONG);
      }
      console.log('🚀 ~ appBtnPress ~ error:', error);
    }
  };
  
  return (
    <AppScreen>
      <ImageBackground 
        source={IMAGES.SignUpCarouselImage}
        style={styles.imageBackground}
      >
        <BackButton />
        <SignUpCarouselPaginator data={Slides} scrollX={scrollX} />
        <View style={{ flex: 3 }}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <SignUpCarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      {currentIndex === 0 && (
        <View>
          <AuthHeader viewStyle={styles.heading} text1={'Whatisyourname'} upperTextStyle={{color: COLORS.yellow}} />
        <InputTextLabel onChangeText={setFirstName} value={firstName} leftIcon={true}><SVG.ProfileAlly /></InputTextLabel>
        <InputTextLabel onChangeText={setLastName} value={lastName} leftIcon={true}><SVG.ProfileAlly /></InputTextLabel>
        </View>
    )}

{currentIndex === 1 && (
  <View style={styles.step}>
    <AuthHeader viewStyle={styles.heading} text1={'Whatisyourgender'} upperTextStyle={{color: COLORS.yellow}} />
    <View style={styles.genderContainer}>
      <TouchableOpacity
        style={[
          styles.genderButtonMale,
          //gender === 'male' ? styles.selectedGenderButton : null,
        ]}
        onPress={() => setGender('male')}
      >
        <SVG.MaleIcon/>
        <Text style={styles.genderButtonText}>Male</Text>
        {gender === 'male' ? <SVG.SelectedGender style={styles.iconMale}/> : <SVG.UnselectedGender style={styles.iconMale}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.genderButtonFemale,
          //gender === 'female' ? styles.selectedGenderButton : null,
        ]}
        onPress={() => setGender('female')}
      >
        <SVG.FemaleIcon/>
        <Text style={[styles.female]}>Female</Text>
        {gender === 'female' ? <SVG.SelectedGender style={styles.iconFemale}/> : <SVG.UnselectedGender style={styles.iconFemale}/>}
      </TouchableOpacity>
    </View>
  </View>
)}

{currentIndex === 2 && (
        <View>
          <AuthHeader viewStyle={styles.heading} text1={'howOldAreYou'} upperTextStyle={{color: COLORS.yellow}} />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.ageButton}>
          <Text style={styles.selectedText}>{selectedAge}</Text>
          <SVG.ArrowDown/>
        </TouchableOpacity>
  
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.ageminiContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <SVG.CrossIcon style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              {ages.map((age) => (
                <TouchableOpacity
                  key={age}
                  onPress={() => handleSelectAge(age)}
                  style={styles.optionButton}
                >
                  <Text style={styles.optionText}>{age.toString()}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    )}


{currentIndex === 3 && (
  <View>
    <AuthHeader viewStyle={styles.headingh} text1={'heightWeight'} upperTextStyle={{color: COLORS.yellow}} />
    <TouchableOpacity onPress={() => setModalVisibleHeight(true)} style={styles.heightButton}>
      <SVG.HeightSelectionIcon/>
      <Text style={styles.selectedTexth}>{selectedHeight}</Text>
    </TouchableOpacity>

    <Modal
      visible={modalVisibleHeight}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainerh}>
        <View style={styles.heightMiniContainer}>
          <View style={styles.modalHeaderh}>
            <TouchableOpacity onPress={() => setModalVisibleHeight(false)}>
              <SVG.CrossIcon style={styles.closeIconh} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollViewh} showsVerticalScrollIndicator={false}>
            {heights.map((height) => (
              <TouchableOpacity
                key={height}
                onPress={() => handleSelectHeight(height)}
                style={styles.optionButtonh}
              >
                <Text style={styles.optionTexth}>{height}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
    <TouchableOpacity onPress={() => setModalVisibleWeight(true)} style={styles.weightButton}>
      <SVG.WeightSelectionIcon/>
      <Text style={styles.selectedTextw}>{selectedWeight}</Text>
    </TouchableOpacity>

    <Modal
      visible={modalVisibleWeight}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainerw}>
        <View style={styles.weightMiniContainer}>
          <View style={styles.modalHeaderw}>
            <TouchableOpacity onPress={() => setModalVisibleWeight(false)}>
              <SVG.CrossIcon style={styles.closeIconw} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollVieww} showsVerticalScrollIndicator={false}>
            {weights.map((weight) => (
              <TouchableOpacity
                key={weight}
                onPress={() => handleSelectWeight(weight)}
                style={styles.optionButtonw}
              >
                <Text style={styles.optionTextw}>{weight}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  </View>
  
)}


{currentIndex === 4 && (
  <View style={styles.step}>
    <AuthHeader viewStyle={styles.heading} text1={'mainGoal'} upperTextStyle={{color: COLORS.yellow}} />
    <View style={styles.goalContainer}>
      <TouchableOpacity
        style={[
          styles.goalButton,
          goal === 'build muscle' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setGoal('build muscle')}
      >
        <SVG.BuildMuscleIcon/>
        <Text style={styles.goalButtonText}>Build Muscle</Text>
        {goal === 'build muscle' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          goal === 'keep fit' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setGoal('keep fit')}
      >
        <SVG.KeepFitIcon/>
        <Text style={styles.goalButtonText}>Keep Fit</Text>
        {goal === 'keep fit' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          goal === 'lose weight' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setGoal('lose weight')}
      >
        <SVG.LoseWeightIcon/>
        <Text style={styles.goalButtonText}>Lose Weight</Text>
        {goal === 'lose weight' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
    </View>
  </View>
)}


{currentIndex === 5 && (
  <View style={styles.step}>
    <AuthHeader viewStyle={styles.heading} text1={'experiencedwithfitness'} upperTextStyle={{color: COLORS.yellow}} />
    <View style={styles.goalContainer}>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'Beginner' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('Beginner')}
      >
        <SVG.BeginnerIcon/>
        <Text style={styles.goalButtonText}>Beginner</Text>
        {fitness === 'Beginner' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'Intermediate' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('Intermediate')}
      >
        <SVG.IntermediateIcon/>
        <Text style={styles.goalButtonText}>Intermediate</Text>
        {fitness === 'Intermediate' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'Advanced' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('Advanced')}
      >
        <SVG.BeginnerIcon/>
        <Text style={styles.goalButtonText}>Advanced</Text>
        {fitness === 'Advanced' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
    </View>
  </View>
)}


{currentIndex === 6 && (
          <ProgressBar currentIndex={currentIndex} />
        )}


{currentIndex === 7 && (
  <View style={styles.step}>
    <AuthHeader viewStyle={styles.heading} text1={'Equipment'} upperTextStyle={{color: COLORS.yellow}} />
    <View style={styles.goalContainer}>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'No Equipments' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('No Equipments')}
      >
        <SVG.BeginnerIcon/>
        <Text style={styles.goalButtonText}>No Equipments</Text>
        {fitness === 'No Equipments' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'Dumbbells' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('Dumbbells')}
      >
        <SVG.IntermediateIcon/>
        <Text style={styles.goalButtonText}>Dumbbells</Text>
        {fitness === 'Dumbbells' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'Garage Gym' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('Garage Gym')}
      >
        <SVG.LoseWeightIcon/>
        <Text style={styles.goalButtonText}>Garage Gym</Text>
        {fitness === 'Garage Gym' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.goalButton,
          fitness === 'Full Gym' ? styles.selectedGoalButton : null,
        ]}
        onPress={() => setFitness('Full Gym')}
      >
        <SVG.FullGymIcon/>
        <Text style={styles.goalButtonText}>Full Gym</Text>
        {fitness === 'Full Gym' ? <SVG.SelectedGender style={styles.iconGoal}/> : <SVG.UnselectedGender style={styles.iconGoal}/>}
      </TouchableOpacity>
    </View>
  </View>
)}


{currentIndex === 8 && (
  <View>
    <AuthHeader viewStyle={styles.heading} text1={'Location'} upperTextStyle={{color: COLORS.yellow}} />
    {/* for Country */}
    <TouchableOpacity onPress={() => setModalVisibleC(true)} style={styles.countryButton}>
      <Text style={styles.selectedText}>{selectedCountry}</Text>
      <SVG.ArrowDown/>
    </TouchableOpacity>

    <Modal
      visible={modalVisibleC}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.countryMiniContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisibleC(false)}>
              <SVG.CrossIcon style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {countries.map((country) => (
              <TouchableOpacity
                key={country}
                onPress={() => handleSelectCountry(country)}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>{country}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
    {/* for City */}
    <TouchableOpacity onPress={() => setModalVisibleCity(true)} style={styles.countryButton}>
      <Text style={styles.selectedText}>{selectedCity}</Text>
      <SVG.ArrowDown/>
    </TouchableOpacity>

    <Modal
      visible={modalVisibleCity}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.countryMiniContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisibleCity(false)}>
              <SVG.CrossIcon style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {cities.map((city) => (
              <TouchableOpacity
                key={city}
                onPress={() => handleSelectCity(city)}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>{city}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
    {/* for State */}
    <TouchableOpacity onPress={() => setModalVisibleState(true)} style={styles.stateButton}>
  <Text style={styles.selectedText}>{selectedState}</Text>
  <SVG.ArrowDown/>
</TouchableOpacity>

<Modal
  visible={modalVisibleState}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.stateMiniContainer}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={() => setModalVisibleState(false)}>
          <SVG.CrossIcon style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {states.map((state) => (
          <TouchableOpacity
            key={state}
            onPress={() => handleSelectState(state)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{state}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </View>
</Modal>
<AppButton btnStyle={styles.saveButton} textStyle={styles.text} title={'save'} onPress={onPressHome} loading={loading} item={Slides[currentIndex]}/>
  </View>
)}




    <AppButton btnStyle={styles.button} textStyle={styles.text} title={'nextStep'} onPress={scrollTo} loading={loading} item={Slides[currentIndex]}/>
      </ImageBackground>
    </AppScreen>
  );
}
