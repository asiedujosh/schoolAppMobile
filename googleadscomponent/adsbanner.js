import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const BannerAds = ({adkey}) => {
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : adkey;

  return (
    <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
  );
};

export default BannerAds;
