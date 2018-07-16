import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { Ionicons } from "@expo/vector-icons";
import FacePile from "react-native-face-pile";
const FACES = [
  {
    id: 0,
    imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg"
  },
  {
    id: 1,
    imageUrl:
      "http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg"
  },
  {
    id: 2,
    imageUrl:
      "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
  },
  {
    id: 3,
    imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
  },
  {
    id: 4,
    imageUrl:
      "https://pbs.twimg.com/profile_images/885357926373654528/4tGgnF71_bigger.jpg"
  }
];

class ExperienceCard extends React.Component {
  render() {
    const { circleSize, showButtons, scale, id } = this.props;
    return (
      <Animated.View style={[styles.container, this.props.style]}>
        <View style={{ flex: 6, flexDirection: "row" }}>
          {/* <Transition appear={myCustomTransitionFunction} disappear={myCustomTransitionFunction2} shared={`card-info-${id}`}> */}
            <View style={{ flex: 3, marginRight: 8 }}>
              <View style={{ flex: 1, flexDirection: "row", marginBottom: 8 }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 18 * scale,
                    flex: 1,
                    flexWrap: "wrap",
                    height: 30 * scale
                  }}
                >
                  Solomon ft Uri
                </Text>
              </View>
              <Text style={{ fontSize: 12 * scale }}>Bluefrog</Text>
              <Text style={{ fontSize: 12 * scale }}>11PM, 31st Aug</Text>
            </View>
          {/* </Transition> */}
          <View style={{ flex: 2, alignItems: "center" }}>
            <Transition shared={`card-friends-${id}`}>
              <FacePile numFaces={3} faces={FACES} circleSize={circleSize} />
            </Transition>
            <Transition shared={`card-type-${id}`}>
              <Text style={{ fontSize: 8 * scale, marginTop: 20 }}>
                Nightlife
              </Text>
            </Transition>
          </View>
        </View>
        {/* </Transition> */}
        {showButtons ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 8
            }}
          >
            <Transition shared={`buttons-going-${id}`}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Ionicons
                  name="ios-checkmark-circle"
                  size={40}
                  color="#b6e64b"
                />
              </View>
            </Transition>
            <Transition shared={`buttons-offers-${id}`}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../assets/images/icons/offer.png")}
                  style={{
                    width: 40,
                    height: 40,
                    flex: 1
                  }}
                />
              </View>
            </Transition>
            <Transition shared={`buttons-not-${id}`}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Ionicons name="ios-close-circle" size={40} color="#e13e56" />
              </View>
            </Transition>
          </View>
        ) : null}
      </Animated.View>
    );
  }
}

ExperienceCard.defaultProps = {
  circleSize: 14,
  showButtons: true,
  scale: 1,
  id: -1
};
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 260,
    borderRadius: 20,
    backgroundColor: "white",
    opacity: 1,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    shadowColor: "black",
    shadowOpacity: 0.3,
    zIndex: 100
  }
});

const myCustomTransitionFunction = transitionInfo => {
  const { progress, start, end } = transitionInfo;
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [0, 0, 0, 0],
  });
  return { opacity: 0 };
};

const myCustomTransitionFunction2 = transitionInfo => {
  const { progress, start, end } = transitionInfo;
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [1, 1, 1, 1],
  });
  return { opacity: 0 };
};
export default ExperienceCard;
