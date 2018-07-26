import { Asset } from 'expo';

const offerLogo = require('../../assets/images/icons/offer.png');
const creative1 = require('../../assets/images/card-image.png');
const creative2 = require('../../assets/images/card-image-2.jpg');
const creative3 = require('../../assets/images/card-image-3.jpg');

const poboSimpleLogo = require('../../assets/images/pobo-simple-logo/logo.png');

export default class Images {
  static offerLogo = offerLogo;
  static creative1 = creative1;
  static creative2 = creative2;
  static creative3 = creative3;
  static poboSimpleLogo = poboSimpleLogo;
  static downloadAsync() {
    return [
      Asset.loadAsync(Images.offerLogo),
      Asset.loadAsync(Images.creative1),
      Asset.loadAsync(Images.creative2),
      Asset.loadAsync(Images.creative3),
      Asset.loadAsync(Images.poboSimpleLogo)
    ];
  }
}
