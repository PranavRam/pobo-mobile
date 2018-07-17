import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode";
import Styleguide from "../../theme/Styleguide";

class OfferScreen extends React.Component {
  state = {
    offerSelected: false
  };

  redeemOffer = offerId => {
    this.setState(prevState => {
      return {
        offerSelected: !prevState.offerSelected
      };
    });
  };
  render() {
    const { offerSelected } = this.state;
    const offers = [
      { id: 1, title: "1+1 Free Drinks", subtitle: "Till 12 AM" },
      { id: 2, title: "Free Shots", subtitle: "12 AM - 1 AM" },
      { id: 3, title: "Free Munchies", subtitle: "11 PM - 3 AM" }
    ];

    const OfferList = offers.map(offer => {
      return (
        <View style={styles.offerItem} key={offer.id}>
          <View style={styles.offerDescription}>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerSubtitle}>{offer.subtitle}</Text>
          </View>
          <View style={styles.offerButton}>
            <TouchableOpacity
              onPress={() => {
                this.redeemOffer(offer.id);
              }}
              style={styles.redeemButtonContainer}
            >
              <Text style={{ fontWeight: "bold" }}>REDEEM</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    });
    return (
      <SafeAreaView style={{ flex: 1 }}>
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
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons name="ios-arrow-down" size={40} color="black" />
          </TouchableWithoutFeedback>
        </View>
        {OfferList}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          {offerSelected ? (
            <QRCode value={"Yolo"} size={250} bgColor="black" fgColor="white" />
          ) : (
            <View style={{ width: "75%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Redeem An Offer to View Your QR Code
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  offerItem: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    padding: 16
  },
  offerDescription: {
    flex: 2,
    justifyContent: "center"
  },
  offerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  offerTitle: {
    ...Styleguide.typography.title3,
    fontSize: 20
  },
  offerSubtitle: {
    ...Styleguide.typography.body
  },
  redeemButtonContainer: {
    padding: 16,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});
export default OfferScreen;
