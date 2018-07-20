// @flow

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Styleguide from "../../theme/Styleguide";

type Props = {
  text: string
};

const ExperienceInfo = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text selectable={true} style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
};

ExperienceInfo.defaultProps = {
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
}

const styles = StyleSheet.create({
  container: {
    padding: Styleguide.spacing.small
  },
  text: {
    ...Styleguide.typography.body
  }
})
export default ExperienceInfo