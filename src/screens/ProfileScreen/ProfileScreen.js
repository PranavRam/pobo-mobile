import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text
} from "react-native";
import HeaderButtons from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";

const ProfileScreen = class extends React.Component {
  static navigationOptions = {
    drawerLabel: () => {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Pranav Ram</Text>
          <Ionicons style={{marginLeft: 8}} name="ios-arrow-forward" size={10} color="black" />
        </View>
      );
    },
    drawerIcon: ({ tintColor }) => (
      <View style={styles.icon}>
        <Image
          source={require("../../assets/images/profile/profile.png")}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
    )
  };
  openDrawer = () => {
    this.props.navigation.openDrawer();
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
        <Text>Profile</Text>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden"
  }
});

export default ProfileScreen;
