import React from "react";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import ExperienceListScreen from "./src/screens/ExperienceListScreen";
import ExperienceDetailScreen from "./src/screens/ExperienceDetailsScreen";

const RootStack = FluidNavigator(
  {
    ExperienceList: {
      screen: ExperienceListScreen
    },
    ExperienceDetail: {
      screen: ExperienceDetailScreen
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
      <RootStack />
      // </SafeAreaView>
    );
  }
}
