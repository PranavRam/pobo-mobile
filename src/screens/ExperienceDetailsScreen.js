import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import { Transition } from "react-navigation-fluid-transitions";
import ParallaxScrollView from "react-native-parallax-scroll-view";
let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

let HEADER_MAX_HEIGHT = (SCREEN_HEIGHT * 2) / 3;
let HEADER_MIN_HEIGHT = 150;

const ExperienceDetailScreen = class extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      showSticky: null
    };

    this.scrollY = new Animated.Value(0);
  }
  closeImage = () => {
    this._parallax.refs["ScrollView"].getNode().scrollTo({ y: 0 });
    this.props.navigation.goBack();
  };
  render() {
    const { showSticky } = this.state;
    const { scrollY } = this;
    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const experience = this.props.navigation.getParam("experience");
    return (
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
            onMomentumScrollEnd={event => console.log(event.type)}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: headerHeight }}
          />
        )}
        renderFixedHeader={
          showSticky
            ? () => (
                <View style={{ height: 150 }}>
                  <Animated.View
                    style={{
                      height: HEADER_MAX_HEIGHT,
                      width: SCREEN_WIDTH
                    }}
                  >
                    <View>
                      {/* <Transition shared={`image-${experience.image.id}`}> */}
                      <Image
                        source={experience.image.src}
                        style={{
                          height: HEADER_MAX_HEIGHT,
                          width: "100%",
                          resizeMode: "cover"
                        }}
                      />
                      {/* </Transition> */}
                    </View>
                  </Animated.View>
                </View>
              )
            : () => (
                <View
                  style={[{ flexDirection: "row", justifyContent: "flex-end" }]}
                >
                  <TouchableWithoutFeedback onPress={() => this.closeImage()}>
                    <View style={[{ marginTop: 48, marginRight: 16 }]}>
                      <Ionicons
                        name="ios-close-outline"
                        size={48}
                        color="white"
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )
        }
        renderBackground={() => (
          <Transition shared={`image-${experience.image.id}`}>
            <Image
              source={experience.image.src}
              style={{
                height: HEADER_MAX_HEIGHT,
                width: "100%",
                resizeMode: "cover"
              }}
            />
          </Transition>
        )}
      >
        <View style={{ flex: 1, padding: 16 }}>
          {/* <Transition shared={`image-${experience.image.id}`}> */}
          />
          {/* </Transition> */}
          <Text style={{ fontSize: 24, paddingBottom: 10 }}>PoBo</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </Text>
        </View>
      </ParallaxScrollView>
    );
  }
};

// class ExperienceDetailScreen extends React.Component {
//   static navigationOptions = { header: null };
//   render() {
//     return <ExperienceDetail />;
//   }
// }

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
    resizeMode: "cover",
    borderRadius: 20
  }
});

export default ExperienceDetailScreen;
