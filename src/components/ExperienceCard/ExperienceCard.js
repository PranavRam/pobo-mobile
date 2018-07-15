import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
export default class ExperienceCard extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{ flex: 6, flexDirection: "row" }}>
          <View style={{ flex: 3, marginRight: 8 }}>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 8 }}>
              <Text
                numberOfLines={2}
                style={{ fontSize: 18, flex: 1, flexWrap: "wrap", height: 40 }}
              >
                Solomon ft Uri
              </Text>
            </View>
            <Text style={{ fontSize: 12 }}>Bluefrog</Text>
            <Text style={{ fontSize: 12 }}>11PM, 31st Aug</Text>
            <Text style={{ fontSize: 8, marginTop:4 }}>3 Offers</Text>
          </View>
          <View style={{ flex: 2 }}>
            <FacePile numFaces={3} faces={FACES} circleSize={14} />
            <Text style={{ fontSize: 8, marginTop:20 }}>Nightlife</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={40}
            color="green"
          />
          <Ionicons name="ios-close-circle-outline" size={40} color="red" />
        </View>
      </View>
    );
  }
}

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
    shadowColor: 'black',
    shadowOpacity: 0.3
  }
});
