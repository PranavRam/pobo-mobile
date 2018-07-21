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
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";

import Styleguide from "../../theme/Styleguide";

const PreferenceRow = props => {
  return (
    <View style={styles.preferenceContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Ionicons name="ios-bonfire" size={24} color="black" />
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 16,
            marginRight: 8
          }}
        >
          <Text style={styles.preferenceTitle}>
            {props.title.toUpperCase()}
          </Text>
        </View>
        <TouchableWithoutFeedback>
          {/* <View
            style={{
              backgroundColor: backgroundColor,
              height: buttonSize,
              width: buttonSize,
              borderRadius: buttonSize / 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          > */}
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={24}
            color="#c3c3c3"
          />
          {/* </View> */}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const UserPreferencesScreen = class extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <PreferenceRow title="Nightlife" />
        <PreferenceRow title="Health & Wellness" />
        <PreferenceRow title="Knowledge & Skill" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preferenceContainer: {
    padding: Styleguide.spacing.small,
    height: 216 - Styleguide.spacing.small
  },
  preferenceTitle: {
    ...Styleguide.typography.title3
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 20
  }
});

export default UserPreferencesScreen;
