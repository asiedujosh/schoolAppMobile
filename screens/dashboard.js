import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  BackHandler,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {PackageApiData} from '../contextApi/package/packageContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {SubscriptionApiData} from '../contextApi/subscription/subscriptionContextApi.js';
import {StoreApiData} from '../contextApi/store/storeContextApi';
import {Dimensions} from 'react-native';
import {DASHBOARD} from '../constant/dashboardConstant';
import styles from '../globalStyles/Styles';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import capitalizeFirstLetter from '../utils/firstLetterCaps.js';
import SubmitBtn from '../component/submitBtn';
import ScrollViewCard from '../component/scrollViewCard.js';
import BannerAds from '../googleadscomponent/adsbanner.js';
import WhatsappBtnContainer from '../component/whatsappBtnContainer.js';

const {width, height} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const {processLogout, userProfile, alreadyLoggedIn, isOffline} =
    useContext(AuthApiData);
  const {processGetMySubscription} = useContext(SubscriptionApiData);
  const {processGetPurchase} = useContext(StoreApiData);
  const {upgrade} = useContext(PackageApiData);
  const {
    examsList,
    processGetAllExams,
    processGetAllYear,
    processGetAllSubject,
  } = useContext(QuestionApiData);

  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    try {
      processGetAllExams();
      processGetAllYear();
      processGetAllSubject();
      processGetPurchase(userProfile && userProfile.id);
      processGetMySubscription(userProfile && userProfile.id);
    } catch (err) {
      console.log(err);
    }
  }, [isOffline]);

  useEffect(() => {
    if (!alreadyLoggedIn) {
      navigation.navigate('Home');
    }
  }, [alreadyLoggedIn]);

  useEffect(() => {
    try {
      let carousels = examsList.filter(item => item.position !== '0');
      setCarouselData(
        carousels.sort((a, b) => parseInt(a.position) - parseInt(b.position)),
      );
    } catch (err) {
      console.log(err);
    }
  }, [examsList]);

  const NetWorkCheck = () => {
    Alert.alert('Network Error', 'Please connect to the internet', [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  const goToUpgradePage = () => {
    if (!isOffline) {
      NetWorkCheck();
    } else {
      navigation.navigate('Upgrading');
    }
  };

  const goToShopPage = () => {
    if (!isOffline) {
      NetWorkCheck();
    } else {
      navigation.navigate('salesShop');
    }
  };

  const handleLogout = () => {
    processLogout();
  };

  //console.log(userProfile);

  return (
    <>
      {userProfile.packageId == 1 && (
        <BannerAds adkey={process.env.AD_UNIT_ID} />
      )}

      <KeyboardAvoidingContainer>
        <View style={{flex: 1, padding: 0}}>
          <View style={styles.dashboardHeadCard}>
            <View style={styles.dashboardHeadTextContainer}>
              <Text style={styles.dashboardHeadTitle}>
                {`${DASHBOARD.headTitle} ${capitalizeFirstLetter(
                  userProfile.username,
                )}`}
                ,
              </Text>
              <Text style={styles.dashboardHeadBody}>{DASHBOARD.headBody}</Text>
            </View>
          </View>

          <View style={styles.scrollViewContainer}>
            <FlatList
              data={carouselData}
              pagingEnabled
              numColumns={1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              scrollEventThrottle={16}
              decelerationRate={'fast'}
              renderItem={({item}) => {
                return <ScrollViewCard data={item} navigation={navigation} />;
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={styles.premiumBtnContainer}>
            <Pressable
              style={[
                styles.loadingBtn,
                styles.premiumBtn,
                {width: 160, marginHorizontal: 5},
              ]}
              onPress={goToShopPage}>
              <Icon name="shopping-cart" size={20} color="#ffffff" />
              <Text style={[styles.loadingBtnText, {marginHorizontal: 5}]}>
                Shop
              </Text>
            </Pressable>
            {userProfile.packageId == 1 && (
              <Pressable
                style={[
                  styles.loadingBtn,
                  styles.premiumBtn,
                  {width: 160, marginHorizontal: 5},
                ]}
                onPress={goToUpgradePage}>
                <Icon name="award" size={20} color="#ffffff" />
                <Text style={[styles.loadingBtnText, {marginHorizontal: 5}]}>
                  Premium
                </Text>
              </Pressable>
            )}
          </View>

          <View style={styles.dashboardCardContainer}>
            <FlatList
              data={DASHBOARD.dashboardCards}
              pagingEnabled
              numColumns={2}
              snapToAlignment="center"
              scrollEventThrottle={16}
              decelerationRate={'fast'}
              renderItem={({item}) => {
                return (
                  <Pressable
                    onPress={() => {
                      if (!isOffline) {
                        NetWorkCheck();
                      } else {
                        navigation.navigate(item.link);
                      }
                    }}
                    style={({pressed}) => [
                      {backgroundColor: pressed ? 'lightblue' : '#efefef'},
                      {
                        borderRadius: width * 0.05,
                        marginTop: 0.02 * height,
                      },
                    ]}>
                    <View style={styles.dashboardCard}>
                      <Image
                        source={item.cardImage} // Replace with the actual path to your image
                        style={styles.dashboardCardImage}
                      />
                      <View style={styles.dashboardOverlay}>
                        <Text style={styles.dashboardOverlayText}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View>
            <SubmitBtn
              color={'#0347A1'}
              topMargin={height * 0.02}
              textColor={'#ffffff'}
              btnText={'Logout'}
              action={handleLogout}
            />
          </View>
        </View>
      </KeyboardAvoidingContainer>
      <WhatsappBtnContainer navigation={navigation} />
    </>
  );
};

export default Dashboard;
