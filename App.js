import React from "react";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import {
  createDrawerNavigator,
  SafeAreaView,
  DrawerItems
} from "react-navigation";
import ExperienceListScreen from "./src/screens/ExperienceListScreen";
import ExperienceDetailScreen from "./src/screens/ExperienceDetailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text
} from "react-native";

const RootStack = FluidNavigator({
  ExperienceList: {
    screen: ExperienceListScreen
  },
  ExperienceDetail: {
    screen: ExperienceDetailScreen
  }
});

// RootStack.navigationOptions = {
//   // gesturesEnabled: false,
//   drawerLabel: "Yo",
//   drawerIcon: ({ tintColor }) => (
//     <Ionicons name="ios-close-circle-outline" size={40} color="red" />
//   )
// };

const CustomDrawerContentComponent = props => {
  const Footer = props => {
    let items = [
      "Terms & Conditions",
      "Privacy Policy",
      "Send Feedback",
      "Rate Us on the App Store",
      "About"
    ];
    return items.map(item => (
      <TouchableOpacity key={item} style={{ marginTop: 30 }}>
        <Text style={{ color: "#c3c3c3", fontSize: 10 }}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
    >
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={{ padding: 16, paddingTop: 0 }}>
          <View>
            <Image
              source={require("./src/assets/images/pobo-sidemenu/logo.png")}
              style={{ height: 30, width: 70 }}
            />
          </View>
          <DrawerItems {...props} />
          <View style={{ height: 100, justifyContent: "center" }}>
            <TouchableOpacity>
              <Text style={{fontSize: 14}}>SIGN OUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View style={{ marginBottom: 32, padding: 16 }}>
        <Footer />
      </View>
    </ScrollView>
  );
};

const RootDrawer = createDrawerNavigator(
  { Home: {screen: RootStack}, Profile: {screen: ProfileScreen} },
  { contentComponent: CustomDrawerContentComponent }
);
export default class App extends React.Component {
  render() {
    return <RootDrawer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 24,
    height: 24
  }
});
