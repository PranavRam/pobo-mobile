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
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

const IMAGES = [
  { id: 1, src: require("../assets/images/1.jpg") },
  { id: 2, src: require("../assets/images/2.jpg") },
  { id: 3, src: require("../assets/images/3.jpg") }
];

const ExperienceList = class extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      activeImage: null
    };
  }
  componentWillMount() {
    this.allImages = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimensions = new Animated.ValueXY();
    this.animated = new Animated.Value(0);
  }
  openImage = id => {
    this.allImages[id].measure((x, y, width, height, pageX, pageY) => {
      console.log(x, y, width, height, pageX, pageY);
      this.oldPosition = {
        x,
        y,
        width,
        height,
        pageX,
        pageY
      };
      this.position.setValue({
        x: pageX,
        y: pageY
      });
      this.dimensions.setValue({
        x: width,
        y: height
      });

      this.setState(
        {
          activeImage: IMAGES.find(img => img.id === id)
        },
        () => {
          this.imageView.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {
            Animated.parallel([
              Animated.timing(this.position.x, {
                toValue: dPageX,
                duration: 300,
              }),
              Animated.timing(this.position.y, {
                toValue: 0,
                duration: 300,
              }),
              Animated.timing(this.dimensions.x, {
                toValue: dWidth,
                duration: 300,
              }),
              Animated.timing(this.dimensions.y, {
                toValue: dHeight,
                duration: 300,
              }),
              Animated.timing(this.animated, {
                toValue: 1,
                duration: 300,
              })
            ]).start();
          });
        }
      );
    });
  };

  closeImage = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.pageX,
        duration: 250,
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.pageY,
        duration: 250,
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 250,
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 250,
      }),
      Animated.timing(this.animated, {
        toValue: 0,
        duration: 250,
      })
    ]).start(() => {
      setTimeout(() => {
        this.setState({
          activeImage: null
        });
      }, 0);
    });
  };

  render() {
    const { activeImage } = this.state;
    const activeImageStyle = {
      width: this.dimensions.x,
      height: this.dimensions.y,
      left: this.position.x,
      top: this.position.y
    };

    const animatedContentY = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    });

    const animatedContentOpacity = this.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    });

    const animatedMiniCardOpacity = this.animated.interpolate({
      inputRange: [0, 0.7, 1],
      outputRange: [1, 0, 0]
    });

    const animatedContentStyle = {
      opacity: animatedContentOpacity,
      transform: [
        {
          translateY: animatedContentY
        }
      ]
    };

    const animatedCrossOpacity = {
      opacity: this.animated
    };

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 200,
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 16
          }}
        >
          <Text style={{ fontSize: 40 }}>
            Hey! Want to do something fun tonight?
          </Text>
        </View>
        <ScrollView style={styles.container} horizontal={true}>
          {IMAGES.map(image => {
            return (
              <View key={image.id} style={{ flex: 1, alignItems: "center", backgroundColor: "transparent" }}>
                <TouchableWithoutFeedback
                  onPress={() => this.openImage(image.id)}
                >
                  <View style={styles.cardContainer}>
                    <Image
                      ref={ref => (this.allImages[image.id] = ref)}
                      source={image.src}
                      style={styles.image}
                    />
                  </View>
                </TouchableWithoutFeedback>
                {/* <Animated.View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                    opacity: activeImage && activeImage.id === image.id ? 0 : 1
                  }}
                > */}
                  <ExperienceCard style={{ top: -75, width: (SCREEN_WIDTH - 48) * 0.8, opacity: activeImage && activeImage.id === image.id ? 0 : 1}} />
                {/* </Animated.View> */}
              </View>
            );
          })}
        </ScrollView>
        <View
          style={StyleSheet.absoluteFill}
          pointerEvents={activeImage ? "auto" : "none"}
        >
          <View
            style={{ flex: 2, zIndex: 1001 }}
            ref={view => (this.imageView = view)}
          >
            <Animated.Image
              source={activeImage ? activeImage.src : null}
              style={[
                {
                  resizeMode: "cover",
                  left: 0,
                  top: 0,
                  height: null,
                  width: null
                },
                activeImageStyle
              ]}
            />
            <TouchableWithoutFeedback onPress={() => this.closeImage()}>
              <Animated.View
                style={[
                  { position: "absolute", top: 48, right: 16 },
                  animatedCrossOpacity
                ]}
              >
                <Ionicons name="ios-close-outline" size={48} color="white" />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
          <Animated.View
            style={[
              {
                zIndex: 1000,
                flex: 1,
                backgroundColor: "white",
                padding: 20,
                paddingTop: 50
              },
              animatedContentStyle
            ]}
          >
            <Text style={{ fontSize: 24, paddingBottom: 10 }}>PoBo</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in
            </Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
};

class ExperienceListScreen extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return <ExperienceList />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    height: SCREEN_HEIGHT - 325,
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

export default ExperienceListScreen;
