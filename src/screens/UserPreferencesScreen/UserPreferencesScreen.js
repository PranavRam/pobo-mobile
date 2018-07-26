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

const data = [
  {
    title: "Nightlife",
    categories: ["Drinking", "Clubbing", "Live Performances", "Dining"]
  },
  {
    title: "Health & Wellness",
    categories: ["Gym", "Yoga", "Martial Arts", "Boxing"]
  },
  {
    title: "Knowledge & Skill",
    categories: ["Drinking", "Clubbing", "Live Performances", "Dining"]
  },
  {
    title: "Networking",
    categories: ["Drinking", "Clubbing", "Live Performances", "Dining"]
  }
];

const PreferenceCategory = props => {
  return (
    <View key={props.title}>
      <View
        style={{ width: 68, height: 68, borderRadius: 34, overflow: "hidden" }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/4.jpg")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: -10,
          left: 48,
          backgroundColor: "white",
          borderRadius: 15,
          overflow: 'hidden'
        }}
      >
        <Ionicons name="ios-checkmark-circle-outline" size={30} color="black" />
      </View>
    </View>
  );
};
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
      <ScrollView
        style={{
          flex: 1,
          marginRight: -16,
          marginLeft: -16
        }}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 16,
          justifyContent: "center",
          alignItems: "center"
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {props.categories.map(category => (
          <View key={category} style={{ marginLeft: 16, marginRight: 16 }}>
            <PreferenceCategory title={category} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const UserPreferencesScreen = class extends React.Component {
  render() {
    const PreferencesList = data.map(d => (
      <PreferenceRow key={d.title} title={d.title} categories={d.categories} />
    ));
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {PreferencesList}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preferenceContainer: {
    padding: Styleguide.spacing.small,
    height: 180
  },
  preferenceTitle: {
    ...Styleguide.typography.title3
  },
  image: {
    flex: 1,
    height: null,
    width: null
  }
});

export default UserPreferencesScreen;
