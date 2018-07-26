import React from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
  Platform
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Styleguide from '../theme/Styleguide';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

let HEADER_MAX_HEIGHT = (SCREEN_HEIGHT * 2) / 3;
let HEADER_MIN_HEIGHT = 100;
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import ExperienceInfo from '../components/ExperienceInfo/ExperienceInfo';
import ExperienceButtons from '../components/ExperienceButtons/ExperienceButtons';

const ExperienceDetailScreen = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImages: false
    };
    this.scrollY = new Animated.Value(0);
  }
  closeImage = () => {
    // this._parallax.refs["ScrollView"].getNode().scrollTo({ y: 0 });
    setTimeout(() => this.props.navigation.goBack());
  };

  showOffers = () => {
    this.props.navigation.navigate('Offer');
  };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showImages: true
  //     });
  //   }, 3000)
  // }
  render() {
    const { showImages } = this.state;
    const { scrollY } = this;

    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });
    const experience = this.props.navigation.getParam('experience');
    return (
      <View style={{ flex: 1 }}>
        {/* <SafeAreaView> */}
        <SafeAreaView
          style={{
            position: 'absolute',
            bottom: 30,
            left: 0,
            width: SCREEN_WIDTH,
            height: 60,
            zIndex: 100
          }}
        >
          <ExperienceButtons
            callbacks={[() => {}, this.showOffers, () => {}]}
            id={experience.image.id}
            buttonSize={60}
          />
        </SafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <ParallaxScrollView
          ref={parallax => (this._parallax = parallax)}
          onScroll={event =>
            this.scrollY.setValue(event.nativeEvent.contentOffset.y)
          }
          contentBackgroundColor="white"
          parallaxHeaderHeight={HEADER_MAX_HEIGHT}
          fadeOutForeground={false}
          renderScrollComponent={() => (
            <Animated.ScrollView
              // onMomentumScrollBegin={() => {
              //   if (showImages) return;
              //   this.setState({ showImages: true });
              // }}
              // onScrollBeginDrag={() => this.setState({showImages: true})}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: headerHeight }}
            />
          )}
          renderFixedHeader={() => (
            <SafeAreaView
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: Platform.OS === 'ios' ? 0 : 24
                }
              ]}
            >
              <Transition appear="top">
                <TouchableWithoutFeedback onPress={() => this.closeImage()}>
                  <View style={[{ marginRight: 16 }]}>
                    <Ionicons name="ios-close" size={60} color="white" />
                  </View>
                </TouchableWithoutFeedback>
              </Transition>
            </SafeAreaView>
          )}
          renderBackground={() => (
            <View>
              <View
                style={{
                  height: HEADER_MAX_HEIGHT,
                  width: SCREEN_WIDTH
                }}
              >
                <Transition
                  zIndex={1000}
                  shared={`image-${experience.image.id}`}
                >
                  <Image
                    source={experience.image.src}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'cover'
                    }}
                  />
                </Transition>
              </View>
              {/* <View>
                <Transition zIndex={500} shared={`card-${experience.image.id}`}>
                  <View
                    style={{
                      position: "absolute",
                      height: 0,
                      left: 0,
                      right: 0,
                      top: HEADER_MAX_HEIGHT * 2,
                      opacity: 0,
                      borderRadius: 20
                    }}
                  />
                </Transition>
              </View> */}
            </View>
          )}
        >
          <View style={{ flex: 1, alignItems: 'center', paddingBottom: 100 }}>
            {/* <Transition
              zIndex={500}
              shared={`card-${experience.image.id}`}
            > */}
            <ExperienceCard
              id={`${experience.image.id}`}
              circleSize={20}
              scale={1.3}
              style={{
                borderRadius: null,
                width: SCREEN_WIDTH,
                shadowColor: null,
                shadowOpacity: null,
                paddingBottom: 16,
                paddingTop: 16
              }}
            />
            {/* </Transition> */}
            <View
              style={{
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 1,
                width: '90%'
              }}
            />
            <ExperienceInfo />
            <ExperienceInfo />
            <ExperienceInfo />
            <View
              style={{
                height: 125,
                width: '100%',
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ ...Styleguide.typography.subhead }}>
                  Address
                </Text>
                <View>
                  <Text style={{ ...Styleguide.typography.caption }}>
                    BLUE FROG
                  </Text>
                  <Text style={{ ...Styleguide.typography.caption }}>
                    Mathuradas Mill Compound
                  </Text>
                  <Text style={{ ...Styleguide.typography.caption }}>
                    Senapati Bapat Marg
                  </Text>
                  <Text style={{ ...Styleguide.typography.caption }}>
                    Lower Parel Mumbai
                  </Text>
                </View>
              </View>
              <Image
                style={{ height: 100, width: 150 }}
                source={{
                  uri:
                    'https://maps.googleapis.com/maps/api/staticmap?center=BlueFrog+Mumbai&zoom=13&size=150x100&maptype=roadmap%20&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=AIzaSyAE-7pcdb40gFiwJUxGC6opityYbZka4Aw'
                }}
              />
            </View>
          </View>
        </ParallaxScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    height: SCREEN_HEIGHT - 350,
    width: SCREEN_WIDTH - 48,
    padding: 16
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 20
  },
  map: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default ExperienceDetailScreen;
