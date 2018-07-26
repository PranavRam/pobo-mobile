import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Dimensions,
  Text,
  Animated,
  Platform
} from 'react-native';
import ExperienceButtons from '../components/ExperienceButtons/ExperienceButtons';
import { Transition } from 'react-navigation-fluid-transitions';
import HeaderButtons from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';

import Styleguide from '../theme/Styleguide';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
let RATIO = 2 / 3;
let HEADER_MAX_HEIGHT = (SCREEN_HEIGHT * 2) / 3;
let HEADER_MIN_HEIGHT = 100;
const scrollRangeForAnimation = 300;
const IMAGES = [
  {
    id: 1,
    src: require('../assets/images/card-image.png')
  },
  {
    id: 2,
    src: require('../assets/images/card-image-2.jpg')
  },
  {
    id: 3,
    src: require('../assets/images/card-image-3.jpg')
  }
];

const myCustomTransitionFunction = transitionInfo => {
  const {
    progress,
    start,
    end,
    boundingbox: { y }
  } = transitionInfo;
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [SCREEN_HEIGHT * 2, SCREEN_HEIGHT * 2, y + 75, y + 75]
  });
  return { transform: [{ translateY: scaleInterpolation }] };
};

const myCustomTransitionFunctionReverse = transitionInfo => {
  const {
    metrics,
    progress,
    start,
    end,
    boundingbox: { y }
  } = transitionInfo;

  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [y + 75, y + 75, SCREEN_HEIGHT * 2, SCREEN_HEIGHT * 2]
  });

  return { transform: [{ translateY: scaleInterpolation }] };
};

const myCustomTransitionFunction2 = transitionInfo => {
  const {
    progress,
    start,
    end,
    boundingbox: { y }
  } = transitionInfo;
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [SCREEN_HEIGHT * 2, SCREEN_HEIGHT * 2, y + 125, y + 125]
  });
  return { transform: [{ translateY: scaleInterpolation }] };
};

const myCustomTransitionFunctionReverse2 = transitionInfo => {
  const {
    metrics,
    progress,
    start,
    end,
    boundingbox: { y }
  } = transitionInfo;

  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [y + 125, y + 125, SCREEN_HEIGHT * 2, SCREEN_HEIGHT * 2]
  });

  return { transform: [{ translateY: scaleInterpolation }] };
};

const ExperienceListScreen = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    };
    this._movement = new Animated.Value(-75);
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  showOffers = () => {
    this.props.navigation.navigate('Offer');
  };

  openImage = id => {
    this.props.navigation.navigate('ExperienceDetail', {
      experience: {
        image: IMAGES.find(d => d.id === id)
      }
    });
  };

  render() {
    const { selectedId } = this.state;
    const Header = props => {
      return (
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            paddingTop: 0,
            marginTop: Platform.OS === 'ios' ? 0 : 24,
            paddingBottom: 0
          }}
        >
          <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
            <Ionicons name="ios-menu" size={40} color="black" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('ExperienceCommited');
            }}
          >
            <Ionicons name="ios-infinite" size={40} color="black" />
          </TouchableWithoutFeedback>
        </View>
      );
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Header />

        <View
          style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 16,
            paddingTop: 8,
            paddingBottom: 8
          }}
        >
          <Text style={{ ...Styleguide.typography.title1 }}>
            Hey! Want to do something fun tonight?
          </Text>
        </View>
        <ScrollView
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {IMAGES.map(image => {
            return (
              <View
                key={image.id}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: 'transparent'
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => this.openImage(image.id)}
                >
                  <View style={styles.cardContainer}>
                    <Transition zIndex={500} shared={`image-${image.id}`}>
                      <Image source={image.src} style={styles.image} />
                    </Transition>
                  </View>
                </TouchableWithoutFeedback>
                <Transition
                  appear={myCustomTransitionFunction}
                  disappear={myCustomTransitionFunctionReverse}
                >
                  <ExperienceCard
                    id={`${image.id}`}
                    style={{
                      top: -75,
                      width: CARD_WIDTH * 0.8,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      height: 100,
                      borderWidth: 0.5,
                      borderColor: '#c3c3c3',
                      borderBottomWidth: 0
                    }}
                  />
                </Transition>
                <View
                  style={{
                    height: 50,
                    width: CARD_WIDTH * 0.8,
                    top: -75,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 0.5,
                    borderColor: '#c3c3c3',
                    borderTopWidth: 0,
                    backgroundColor: 'white',
                    opacity: 0
                  }}
                >
                  <ExperienceButtons
                    id={image.id}
                    buttonSize={40}
                    callbacks={[() => {}, this.showOffers, () => {}]}
                  />
                  {/* <ExperienceCard
                    id={`${image.id}`}
                    style={[
                      {
                        top: -225,
                        width: CARD_WIDTH * 0.8
                      }
                    ]}
                  /> */}
                </View>
                <Transition
                  appear={myCustomTransitionFunction2}
                  disappear={myCustomTransitionFunctionReverse2}
                >
                  <View
                    style={{
                      height: 50,
                      width: CARD_WIDTH * 0.8,
                      top: -125
                    }}
                  >
                    <ExperienceButtons
                      id={`${image.id}-dummy`}
                      buttonSize={40}
                      style={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderWidth: 0.5,
                        borderColor: '#c3c3c3',
                        borderTopWidth: 0,
                        backgroundColor: 'white'
                      }}
                      callbacks={[() => {}, this.showOffers, () => {}]}
                    />
                  </View>
                </Transition>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const CARD_HEIGHT = SCREEN_HEIGHT - 400;
const FULL_RATIO = (SCREEN_HEIGHT * 2) / 3 / SCREEN_WIDTH;
const CARD_WIDTH = CARD_HEIGHT / FULL_RATIO;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    margin: Styleguide.spacing.small
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 20
  }
});

export default ExperienceListScreen;
