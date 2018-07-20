import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text
} from "react-native";
import HeaderButtons from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";

const SignInScreen = class extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const EmailInput = props => {
      return (
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={"Email".toUpperCase()} />
        </View>
      );
    };

    const PasswordInput = props => {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password".toUpperCase()}
          />
        </View>
      );
    };

    const SubmitButton = props => {
      return (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.props.navigation.navigate("App")}
        >
          {/* <View > */}
          <Text style={styles.submitButtonText}>SIGN IN</Text>
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
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/pobo/pobo.png")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 50, marginBottom: 20 }}>
          <View
            style={{
              width: 180,
              alignItems: "center",
              marginBottom: 20,
              marginTop: 20
            }}
          >
            <EmailInput />
          </View>
          <View
            style={{
              width: 180,
              alignItems: "center",
              marginBottom: 20,
              marginTop: 20
            }}
          >
            <PasswordInput />
          </View>
          <SubmitButton />
        </View>
        <View>
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
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("UserRegistration")}
          >
            <Text style={{ marginBottom: 10, fontSize: 12 }}>
              NEW HERE? SIGN UP
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 10 }}>FORGOT PASSWORD</Text>
        </View>
        <View>
          <Text style={{ color: "#c3c3c3", fontSize: 10 }}>
            TERMS & CONDITIONS
          </Text>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white"
  },
  logo: {
    width: 180,
    height: 90,
    overflow: "hidden",
    marginTop: 100
  },
  inputContainer: {
    width: "100%",
    borderBottomWidth: 0.5
  },
  input: {
    textAlign: "center",
    height: 40
  },
  submitButton: {
    height: 35,
    width: 90,
    backgroundColor: "#353535",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  submitButtonText: {
    color: "white",
    fontSize: 10
  },
  socialButtons: {
    height: 35,
    width: 190,
    backgroundColor: "#353535",
    borderRadius: 3,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  socialButtonsText: {
    color: "white",
    flex: 3,
    fontSize: 10
  }
});

export default SignInScreen;
