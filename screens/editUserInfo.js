import {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn.js';
import PageBackBtn from '../component/backPageBtn.js';
import LoadingBtn from '../component/loadingBtn.js';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import InputField from '../component/inputField';
import {EDITSIGNINFO} from '../constant/homeConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import EditCountrySelect from '../component/countrySelectEdit.js';
import {POLICYURL} from '../constant/homeConstant';

const {width, height} = Dimensions.get('window');

const EditUserInfo = ({navigation}) => {
  const {
    userProfile,
    processUpdateUser,
    editUserAlert,
    setEditUserAlert,
    signInLoading,
    setSignInLoading,
  } = useContext(AuthApiData);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    username: userProfile.username,
    code: userProfile.tel.split(' ')[0],
    tel: userProfile.tel.split(' ')[1],
    email: userProfile.email,
    country: userProfile.country,
  });

  const handleInputChange = (data, field) => {
    setFormData({...formData, [field]: data});
  };

  const handlePressLink = () => {
    Linking.openURL(POLICYURL);
  };

  editUserAlert &&
    Alert.alert('Success', 'Your data was updated successfully', [
      {
        text: 'Ok',
        onPress: () => {
          setEditUserAlert(false);
        },
      },
    ]);

  //console.log(userProfile);
  const handleSubmit = () => {
    // navigation.navigate('NotAvailable');
    // formData.tel = formData.tel.trim();
    // formData.email = formData.email.trim();
    // formData.country = formData.country.trim();
    let err = [];
    EDITSIGNINFO.field.map((item, index) => {
      if (!formData.tel || !formData.email || !formData.country) {
        let errData = {
          errName: item.name,
          errMsg: `* ${item.label} cannot be empty`,
        };
        err.push(errData);
      }
    });

    if (err.length !== 0) {
      setError(err);
    } else {
      setError(error);
      let newTel = formData.code + ' ' + formData.tel;
      formData.tel = newTel;
      setSignInLoading(true);
      processUpdateUser(formData);
    }
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.quizOptionContainer}>
          <View
            style={[
              styles.dashboardHeadCard,
              styles.reviewCardTwo,
              styles.settingHeadCard,
            ]}>
            <View style={styles.dashboardHeadFAQ}>
              <Text style={[styles.dashboardHeadTitle]}>
                {EDITSIGNINFO.title}
              </Text>
              <View style={[styles.homeBtnWrapper, {marginLeft: -25}]}>
                <PageBackBtn navigation={navigation} />
              </View>
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.quizScrollContainer}>
                {EDITSIGNINFO.field.map((item, index) =>
                  item.name !== 'tel' ? (
                    <InputField
                      key={index}
                      top={0.04 * height}
                      title={userProfile[item.name]}
                      field={item.name}
                      err={error}
                      width={width * 0.85}
                      editable={item.name == 'username' ? false : true}
                      placeholder={item.placeholder}
                      change={(data, field) => {
                        //   console.log('We are year');
                        handleInputChange(data, field);
                      }}
                    />
                  ) : (
                    <EditCountrySelect
                      top={0.04 * height}
                      formAction={[formData, setFormData]}
                      change={(data, field) => {
                        //   console.log('We are year');
                        handleInputChange(data, field);
                      }}
                    />
                  ),
                )}

                <View>
                  {signInLoading ? (
                    <LoadingBtn />
                  ) : (
                    <SubmitBtn
                      btnText={EDITSIGNINFO.btnText}
                      width={width * 0.85}
                      color={'#ffffff'}
                      textColor={'#0347A1'}
                      borderRadius={30}
                      topMargin={0.05 * height}
                      action={handleSubmit}
                    />
                  )}
                </View>

                {/* <View>
                  <Text
                    style={[
                      styles.homeBodyText,
                      {color: '#ffffff', marginTop: '4%'},
                    ]}>
                    View our privacy policy
                  </Text>

                  <TouchableOpacity onPress={handlePressLink}>
                    <Text
                      style={[
                        styles.homeBodyText,
                        {color: '#ffffff', textDecorationLine: 'underline'},
                      ]}>
                      here
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default EditUserInfo;
