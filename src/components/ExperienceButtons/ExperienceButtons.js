import React from "react";
import { View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Transition } from "react-navigation-fluid-transitions";

class ExperienceButtons extends React.Component {
  render() {
    const { id, buttonSize, backgroundColor, style } = this.props;

    const IconWrapper = props => {
      let Component = (
        <View
          style={{
            backgroundColor: backgroundColor,
            height: buttonSize,
            width: buttonSize,
            borderRadius: buttonSize / 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {props.children}
        </View>
      );

      return Component;
      // return <MainIconWrapper shared={props.id}>{Component}</MainIconWrapper>;
    };

    return (
      <View
        style={[{
          flexDirection: "row",
          justifyContent: "space-around"
        }, style]}
      >
        <Transition shared={`buttons-going-${id}`}>
          <IconWrapper id={`buttons-going-${id}`}>
            <Ionicons
              name="ios-checkmark-circle"
              size={buttonSize}
              color="#b6e64b"
            />
          </IconWrapper>
        </Transition>
        <Transition shared={`buttons-offers-${id}`}>
          <IconWrapper id={`buttons-offers-${id}`}>
            <Image
              source={require("../../assets/images/icons/offer.png")}
              style={{
                width: buttonSize,
                height: buttonSize,
                flex: 1
              }}
            />
          </IconWrapper>
        </Transition>
        <Transition shared={`buttons-not-${id}`}>
          <IconWrapper id={`buttons-not-${id}`}>
            <Ionicons
              name="ios-close-circle"
              size={buttonSize}
              color="#e13e56"
            />
          </IconWrapper>
        </Transition>
      </View>
    );
  }
}

ExperienceButtons.defaultProps = {
  // viewWidth: "100%",
  buttonSize: 16,
  // zIndex: 100,
  backgroundColor: "white"
};

export default ExperienceButtons;
