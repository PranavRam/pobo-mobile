import React from "react";
import { createStackNavigator, SafeAreaView } from "react-navigation";
import ExperienceListScreen from "./src/screens/ExperienceListScreen";

const RootStack = createStackNavigator({
  ExperienceList: {
    screen: ExperienceListScreen
  }
});

export default class App extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
        <RootStack />
      // </SafeAreaView>
    );
  }
}
