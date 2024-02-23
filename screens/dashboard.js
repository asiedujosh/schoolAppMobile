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
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {PackageApiData} from '../contextApi/package/packageContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
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
  const {processLogout, userProfile, alreadyLoggedIn} = useContext(AuthApiData);
  const {upgrade} = useContext(PackageApiData);
  const {
    examsList,
    processGetAllExams,
    processGetAllYear,
    processGetAllSubject,
  } = useContext(QuestionApiData);

  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    processGetAllExams();
    processGetAllYear();
    processGetAllSubject();

    // const backAction = () => {
    //   Alert.alert(
    //     'Exit App',
    //     'Are you sure you want to exit?',
    //     [
    //       {
    //         text: 'Cancel',
    //         onPress: () => null,
    //         style: 'cancel',
    //       },
    //       {text: 'OK', onPress: () => BackHandler.exitApp()},
    //     ],
    //     {cancelable: false},
    //   );
    //   return true; // Prevent default back button behavior
    // };

    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   backAction,
    // );

    // return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (!alreadyLoggedIn) {
      navigation.navigate('Home');
    }
  }, [alreadyLoggedIn]);

  useEffect(() => {
    let carousels = examsList.filter(item => item.position !== '0');
    setCarouselData(
      carousels.sort((a, b) => parseInt(a.position) - parseInt(b.position)),
    );
  }, [examsList]);

  const goToUpgradePage = () => {
    navigation.navigate('Upgrading');
  };

  const handleLogout = () => {
    processLogout();
  };

  //console.log(userProfile);

  return (
    <>
      {userProfile.packageId == 1 && <BannerAds />}

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
          {userProfile.packageId == 1 && (
            <View style={styles.premiumBtnContainer}>
              <Pressable
                style={[styles.loadingBtn, styles.premiumBtn]}
                onPress={goToUpgradePage}>
                <Icon name="crown" size={20} color="#ffffff" />
                <Text style={[styles.loadingBtnText, {marginHorizontal: 5}]}>
                  Premium
                </Text>
              </Pressable>
            </View>
          )}

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
                      navigation.navigate(item.link);
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
