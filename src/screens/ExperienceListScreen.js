import React from "react";
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
  Animated
} from "react-native";
import ExperienceButtons from "../components/ExperienceButtons/ExperienceButtons";
import { Transition } from "react-navigation-fluid-transitions";
import HeaderButtons from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;
let RATIO = 2 / 3;
let HEADER_MAX_HEIGHT = (SCREEN_HEIGHT * 2) / 3;
let HEADER_MIN_HEIGHT = 100;
const scrollRangeForAnimation = 300;
const IMAGES = [
  {
    id: 1,
    src:
      "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/14.%20Apple%20App%20of%20the%20day/%231.%20Basic%20Layout/assets/1.jpg"
  },
  {
    id: 2,
    src:
      "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/14.%20Apple%20App%20of%20the%20day/%231.%20Basic%20Layout/assets/2.jpg"
  },
  {
    id: 3,
    src:
      "https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/14.%20Apple%20App%20of%20the%20day/%231.%20Basic%20Layout/assets/3.jpg"
  }
];

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
  openImage = id => {
    this.props.navigation.navigate("ExperienceDetail", {
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
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            paddingTop: 0,
            paddingBottom: 0
          }}
        >
          <TouchableWithoutFeedback onPress={() => this.openDrawer()}>
            <Ionicons name="ios-menu" size={40} color="black" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Ionicons name="ios-infinite" size={40} color="black" />
          </TouchableWithoutFeedback>
        </View>
      );
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />

        <View
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 16,
            paddingTop: 8,
            paddingBottom: 8
          }}
        >
          <Text style={{ fontSize: 34 }}>
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
                  alignItems: "center",
                  backgroundColor: "transparent"
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => this.openImage(image.id)}
                >
                  <View style={styles.cardContainer}>
                    <Transition zIndex={500} shared={`image-${image.id}`}>
                      <Image
                        source={{
                          uri: image.src
                        }}
                        style={styles.image}
                      />
                    </Transition>
                  </View>
                </TouchableWithoutFeedback>
                <Transition zIndex={1000} shared={`card-${image.id}`}>
                  <ExperienceCard
                    id={`${image.id}`}
                    style={{
                      top: -75,
                      width: CARD_WIDTH * 0.8,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      height: 100,
                      borderWidth: 0.5,
                      borderColor: "#c3c3c3",
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
                    borderColor: "#c3c3c3",
                    borderTopWidth: 0
                  }}
                >
                  <ExperienceButtons id={image.id} buttonSize={40} />
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
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const myCustomTransitionFunction = transitionInfo => {
  const { progress, start, end } = transitionInfo;
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [0, 0, 0, 0]
  });
  return { opacity: scaleInterpolation };
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
    margin: 16
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
