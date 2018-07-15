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
  Text
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import HeaderButtons from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

let HEADER_MAX_HEIGHT = (SCREEN_HEIGHT * 2) / 3;
let HEADER_MIN_HEIGHT = 100;
const scrollRangeForAnimation = 300;
const IMAGES = [
  { id: 1, src: require("../assets/images/4.jpg") },
  { id: 2, src: require("../assets/images/4.jpg") },
  { id: 3, src: require("../assets/images/4.jpg") }
];

const ExperienceListScreen = class extends React.Component {
  openDrawer = () => {
    this.props.navigation.openDrawer();
  };
  openImage = id => {
    return this.props.navigation.navigate("ExperienceDetail", {
      experience: {
        image: IMAGES.find(d => d.id === id)
      }
    });
  };

  render() {
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
                    <Transition shared={`image-${image.id}`}>
                      <Image
                        source={{
                          uri:
                            "https://article.images.consumerreports.org/c_lfill,ar_16:9,w_320/prod/content/dam/CRO%20Images%202017/Cars/August/CR-Cars-Hero-aaa-small-sedans-0817.jpg"
                        }}
                        style={styles.image}
                      />
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
