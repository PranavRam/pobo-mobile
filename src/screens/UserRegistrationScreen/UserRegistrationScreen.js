import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import UserPreferencesScreen from '../UserPreferencesScreen/UserPreferencesScreen';
import Spacer from 'react-native-spacer';
const { width } = Dimensions.get('window');
import HeaderButtons, {
  HeaderButton,
  Item
} from 'react-navigation-header-buttons';
const UserRegistrationInfo = class extends React.Component {
  render() {
    const EmailInput = props => {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.input}
            placeholder={props.text.toUpperCase()}
          />
        </View>
      );
    };

    const PasswordInput = props => {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.input}
            placeholder={props.text.toUpperCase()}
          />
        </View>
      );
    };

    const SubmitButton = props => {
      return (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.props.navigation.navigate('App')}
        >
          {/* <View > */}
          <Text style={styles.submitButtonText}>REGISTER</Text>
          {/* </View> */}
        </TouchableOpacity>
      );
    };

    const SocialMediaLogin = props => {
      return (
        <TouchableOpacity style={styles.socialButtons}>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Ionicons name={`logo-${props.text}`} size={28} color="white" />
          </View>
          <Text style={styles.socialButtonsText}>
            {`Sign in with ${props.text}`.toUpperCase()}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <Spacer spaceMargin={64}>
          <View style={{ height: 100, alignItems: 'center' }}>
            <Ionicons name="ios-person-add" size={60} color="black" />
            <Text style={{ fontSize: 10 }}>ADD A PROFILE PICTURE</Text>
          </View>
          <View
            style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}
          >
            <View
              style={{
                width: 180,
                alignItems: 'center',
                marginBottom: 20,
                marginTop: 20
              }}
            >
              <EmailInput text="Email" />
            </View>
            <View
              style={{
                width: 180,
                alignItems: 'center',
                marginBottom: 20,
                marginTop: 20
              }}
            >
              <PasswordInput text="Password" />
            </View>
            <View
              style={{
                width: 180,
                alignItems: 'center',
                marginBottom: 20,
                marginTop: 20
              }}
            >
              <PasswordInput text="Confirm Password" />
            </View>
            {/* <SubmitButton /> */}
          </View>
          {/* <View>
          <View
            style={{
              width: 180,
              alignItems: "center",
              marginBottom: 8
            }}
          >
            <SocialMediaLogin text={"facebook"} />
          </View>
          <View
            style={{
              width: 180,
              alignItems: "center",
              marginBottom: 20
            }}
          >
            <SocialMediaLogin text={"linkedin"} />
          </View>
        </View> */}
        </Spacer>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    width: 180,
    height: 90,
    overflow: 'hidden',
    marginTop: 100
  },
  inputContainer: {
    width: '100%',
    borderBottomWidth: 0.5
  },
  input: {
    textAlign: 'center',
    height: 40
  },
  submitButton: {
    height: 35,
    width: 90,
    backgroundColor: '#353535',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 10
  },
  socialButtons: {
    height: 35,
    width: 190,
    backgroundColor: '#353535',
    borderRadius: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  socialButtonsText: {
    color: 'white',
    flex: 3,
    fontSize: 10
  }
});

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/images/pobo-simple-logo/logo.png')}
        style={{ height: 30, width: 70 }}
      />
    );
  }
}

const IoniconsHeaderButton = props => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} />
);

export default class UserRegistrationScreen extends React.Component {
  static navigationOptions = ({ navigation, navigation: { state } }) => {
    return {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTintColor: 'black',
      headerRight: (
        <TouchableWithoutFeedback
          onPress={navigation.getParam('rightButtonFunc')}
        >
          <View
            style={{
              justifyContent: 'center',
              height: 50,
              alignItems: 'center',
              marginRight: 8
            }}
          >
            <Text>{navigation.getParam('registrationText')}</Text>
          </View>
        </TouchableWithoutFeedback>
      ),
      headerLeft: (
        <HeaderButtons left HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Back"
            iconName="ios-arrow-back"
            onPress={navigation.getParam('leftButtonFunc')}
          />
        </HeaderButtons>
      )
    };
  };
  state = {
    index: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.setParams({
        registrationText: 'Next',
        rightButtonFunc: this._navToUserPrefs,
        leftButtonFunc: () => this.props.navigation.goBack()
      });
    }, 100);
  }

  _navToUserPrefs = () => {
    this.setState({ index: 1 }, () => this._scrollView.scrollToEnd());
    this.props.navigation.setParams({
      registrationText: 'Register',
      rightButtonFunc: () => {},
      leftButtonFunc: this._navToUserRegistration
    });
  };

  _navToUserRegistration = () => {
    this.setState({ index: 0 }, () => this._scrollView.scrollTo({ x: 0 }));
    this.props.navigation.setParams({
      registrationText: 'Next',
      rightButtonFunc: this._navToUserPrefs,
      leftButtonFunc: () => this.props.navigation.goBack()
    });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
      >
        <ScrollView
          ref={scrollView => (this._scrollView = scrollView)}
          style={{ flex: 1 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        >
          <View style={{ flex: 1, width }}>
            <UserRegistrationInfo />
          </View>
          <View style={{ flex: 1, width }}>
            <UserPreferencesScreen />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// export default UserRegistrationInfo;
