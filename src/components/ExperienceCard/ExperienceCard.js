import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { Ionicons } from "@expo/vector-icons";
import FacePile from "react-native-face-pile";
import Styleguide from "../../theme/Styleguide";

const FACES = [
  {
    id: 0,
    imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg"
  },
  {
    id: 1,
    imageUrl:
      "http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg"
  },
  {
    id: 2,
    imageUrl:
      "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
  },
  {
    id: 3,
    imageUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
  },
  {
    id: 4,
    imageUrl:
      "https://pbs.twimg.com/profile_images/885357926373654528/4tGgnF71_bigger.jpg"
  }
];

class ExperienceCard extends React.Component {
  render() {
    const { circleSize, showButtons, scale, id } = this.props;
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{ flex: 6, flexDirection: "row" }}>
          {/* <Transition shared={`card-info-${id}`}> */}
          <View style={{ flex: 3, marginRight: 8 }}>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 8 }}>
              {/* <Transition shared={`card-title-${id}`}> */}
                <Text
                  numberOfLines={2}
                  style={{
                    flex: 1,
                    flexWrap: "wrap",
                    ...Styleguide.typography.headline,
                    fontSize: Styleguide.typography.headline.fontSize * scale
                  }}
                >
                  Solomon ft Uri
                </Text>
              {/* </Transition> */}
            </View>
            {/* <Transition shared={`card-location-${id}`}> */}
              <Text style={{ ...Styleguide.typography.footnote,
                    fontSize: Styleguide.typography.footnote.fontSize * scale, marginBottom: 4 }}>Bluefrog</Text>
            {/* </Transition> */}
            {/* <Transition shared={`card-date-${id}`}> */}
              <Text style={{ ...Styleguide.typography.footnote,
                    fontSize: Styleguide.typography.footnote.fontSize * scale  }}>11PM, 31st Aug</Text>
            {/* </Transition> */}
          </View>
          {/* </Transition> */}
          <View style={{ flex: 2, alignItems: "center" }}>
            {/* <Transition shared={`card-friends-${id}`}> */}
            <FacePile numFaces={3} faces={FACES} circleSize={circleSize} />
            {/* </Transition> */}
            {/* <Transition shared={`card-type-${id}`}> */}
            <Text style={{ fontSize: 8 * scale, marginTop: 20 }}>
              Nightlife
            </Text>
            {/* </Transition> */}
          </View>
        </View>
        {/* </Transition> */}
      </View>
    );
  }
}

ExperienceCard.defaultProps = {
  circleSize: 14,
  showButtons: true,
  scale: 1,
  id: -1
};
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 260,
    backgroundColor: "white",
    opacity: 1,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    // shadowColor: "black",
    // shadowOpacity: 0.3,
    borderColor: '#c3c3c3',
    zIndex: 100
  }
});

export default ExperienceCard;
