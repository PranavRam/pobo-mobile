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
import { Transition } from "react-navigation-fluid-transitions";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

let HEADER_MAX_HEIGHT = (SCREEN_HEIGHT * 2) / 3;
let HEADER_MIN_HEIGHT = 100;
const scrollRangeForAnimation = 300;
const IMAGES = [
  { id: 1, src: require("../assets/images/1.jpg") },
  { id: 2, src: require("../assets/images/2.jpg") },
  { id: 3, src: require("../assets/images/3.jpg") }
];

const ExperienceListScreen = class extends React.Component {
  static navigationOptions = { header: null };

  openImage = id => {
    return this.props.navigation.navigate("ExperienceDetail", {
      experience: {
        image: IMAGES.find(d => d.id === id)
      }
    });
  };

  render() {
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
                    <Transition shared={`image-${image.id}`}>
                      <Image source={image.src} style={styles.image} />
                    </Transition>
                  </View>
                </TouchableWithoutFeedback>

                <ExperienceCard
                  style={{
                    top: -75,
                    width: (SCREEN_WIDTH - 80) * 0.8
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

// class ExperienceListScreen extends React.Component {
//   static navigationOptions = { header: null };
//   render() {
//     return <ExperienceList />;
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    height: SCREEN_HEIGHT - 350,
    width: SCREEN_WIDTH - 80,
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
