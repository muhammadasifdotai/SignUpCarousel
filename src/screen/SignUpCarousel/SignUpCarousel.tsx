import React, { useRef, useState } from 'react';
import { Animated, FlatList, ImageBackground, TouchableOpacity, View, ViewStyle } from 'react-native';
import { AppButton, AppScreen, AppText, AuthHeader, BackButton, InputTextLabel,SignUpCarouselItem, SignUpCarouselNextButton, SignUpCarouselPaginator } from '../../components';
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

  const [emailAddress, setEmailAddress] = useState<string>('Email');
  const [password, setPassword] = useState<string>('Password');
  const [loading, setLoading] = useState<boolean>(false);

  const userData = useAppStore(state => state.userData);

  console.log('🚀 ~ LoginScreen ~ userData:', userData);
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
        <AuthHeader viewStyle={styles.heading} text1={'Whatisyourname'} upperTextStyle={{color: COLORS.yellow}} />
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
        <InputTextLabel onChangeText={setFirstName} value={firstName} leftIcon={true}><SVG.ProfileAlly /></InputTextLabel>
        <InputTextLabel onChangeText={setLastName} value={lastName} leftIcon={true}><SVG.ProfileAlly /></InputTextLabel>
        {/* <AppButton btnStyle={styles.button} textStyle={styles.text} title={'nextStep'} onPress={scrollTo} scrollTo={scrollTo} loading={loading} item={Slides[currentIndex]}/> */}
        <SignUpCarouselPaginator data={Slides} scrollX={scrollX} />
      <SignUpCarouselNextButton scrollTo={scrollTo} />

      </ImageBackground>
    </AppScreen>
  );
}
