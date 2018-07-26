import React from "react";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createStackNavigator,
  SafeAreaView,
  DrawerItems
} from "react-navigation";
import ExperienceListScreen from "./src/screens/ExperienceListScreen";
import ExperienceDetailScreen from "./src/screens/ExperienceDetailsScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import OfferScreen from "./src/screens/OfferScreen/OfferScreen";

import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import UserRegistrationScreen from "./src/screens/UserRegistrationScreen/UserRegistrationScreen";

import { Ionicons } from "@expo/vector-icons";
import { Font, AppLoading } from "expo";
import Images from "./src/components/images"

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button
} from "react-native";

const ProximaNovaExtraBold = require("./fonts/ProximaNova/ProximaNova-Extrabold.otf");
const LatoRegular = require("./fonts/Lato/Lato-Regular.ttf");
const ExperienceStack = FluidNavigator(
  {
    ExperienceList: {
      screen: ExperienceListScreen
    },
    ExperienceDetail: {
      screen: ExperienceDetailScreen
    }
  },
  {
    transitionConfig: {
      duration: 750
    },
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

class ExperienceCommitedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal! Not!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const MainExperience = createStackNavigator(
  {
    Main: {
      screen: ExperienceStack
    },
    ExperienceCommited: {
      screen: ExperienceCommitedScreen
    }
  },
  { headerMode: "none" }
);

const Modal = createStackNavigator(
  {
    Main: {
      screen: MainExperience
    },
    Offer: {
      screen: OfferScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "white"
    }
  }
);

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
        <Text style={{ color: "#c3c3c3", fontSize: 10 }}>
          {item.toUpperCase()}
        </Text>
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
              source={require("./src/assets/images/pobo-simple-logo/logo.png")}
              style={{ height: 30, width: 70 }}
            />
          </View>
          <DrawerItems {...props} />
          <View style={{ height: 100, justifyContent: "center" }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 14 }}>SIGN OUT</Text>
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
  { Home: { screen: Modal }, Profile: { screen: ProfileScreen } },
  {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeBackgroundColor: "transparent"
    }
  }
);

const AuthStack = createStackNavigator({ SignIn: SignInScreen, UserRegistration: UserRegistrationScreen });

const AppStack = createSwitchNavigator(
  {
    App: RootDrawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    appReady: false
  };
  ready = () => {
    this.setState({
      appReady: true
    });
  };

  
  async componentDidMount() {
    // StatusBar.setBarStyle("dark-content");
    // if (Platform.OS === "android") {
    //     StatusBar.setBackgroundColor("white");
    // }

    // const imageAssets = cacheImages([
    //   'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    //   require('./assets/images/circle.jpg'),
    // ]);

    const fonts = Font.loadAsync({
      "ProximaNova-ExtraBold": ProximaNovaExtraBold,
      "Lato-Regular": LatoRegular
    });
    const images = Images.downloadAsync();
    //const icons = loadIcons();
    await Promise.all([fonts, ...images]);
    this.ready();
  }
  render() {
    const { appReady } = this.state;
    return appReady ? <AppStack /> : <AppLoading />;
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
