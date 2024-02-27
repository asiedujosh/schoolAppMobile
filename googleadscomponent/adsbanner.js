import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const BannerAds = () => {
  return (
    <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
  );
};

export default BannerAds;
