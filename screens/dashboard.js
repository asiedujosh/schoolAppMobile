import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import {QuestionApiData} from '../contextApi/question/questionContextApi.js';
import {Dimensions} from 'react-native';
import {DASHBOARD} from '../constant/dashboardConstant';
import styles from '../globalStyles/Styles';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import capitalizeFirstLetter from '../utils/firstLetterCaps.js';
import SubmitBtn from '../component/submitBtn';
import ScrollViewCard from '../component/scrollViewCard.js';

const {width, height} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const {processLogout, userProfile, alreadyLoggedIn} = useContext(AuthApiData);
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

  const handleLogout = () => {
    processLogout();
  };

  //console.log(userProfile);

  return (
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
              return <ScrollViewCard data={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.dashboardCardContainer}>
          <FlatList
            data={DASHBOARD.dashboardCards}
            keyExtractor={(item, index) => 'key' + item.title}
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
          />
        </View>
        <View>
          <SubmitBtn
            color={'#0347A1'}
            topMargin={height * 0.05}
            textColor={'#ffffff'}
            btnText={'Logout'}
            action={handleLogout}
          />
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Dashboard;
