import {Asset} from "expo";

const offerLogo = require("../../assets/images/icons/offer.png")

export default class Images {

    static offerLogo = offerLogo;

    static downloadAsync() {
        return [
            Asset.loadAsync(Images.offerLogo)
        ];
    }
}