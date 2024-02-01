import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {Dimensions} from 'react-native';
import styles from '../globalStyles/Styles';
import SubmitBtn from '../component/submitBtn';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import InputField from '../component/inputField';
import {EDITSIGNINFO} from '../constant/homeConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';
import CountrySelect from '../component/selectCountry.js';

const {width, height} = Dimensions.get('window');

const EditUserInfo = ({navigation}) => {
  const {userProfile, processEditUserInfo, signInLoading, setSignInLoading} =
    useContext(AuthApiData);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    username: userProfile.username,
    tel: userProfile.tel,
    email: userProfile.email,
    country: userProfile.country,
  });

  const handleInputChange = (data, field) => {
    setFormData({...formData, [field]: data});
  };

  //console.log(userProfile);
  const handleSubmit = () => {
    navigation.navigate('NotAvailable')
    // formData.tel = formData.tel.trim();
    // formData.email = formData.email.trim();
    // formData.country = formData.country.trim();
    // let err = [];
    // EDITSIGNINFO.field.map((item, index) => {
    //   if (!formData.tel || !formData.email || !formData.country) {
    //     let errData = {
    //       errName: item.name,
    //       errMsg: `* ${item.label} cannot be empty`,
    //     };
    //     err.push(errData);
    //   }
    // });

    // if (err.length !== 0) {
    //   setError(err);
    // } else {
    //   setError(error);
    //   setSignInLoading(true);
    //   processEditUserInfo(formData);
    // }
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.dashboardHeadFAQ}>
            <Text style={styles.dashboardHeadTitle}>{EDITSIGNINFO.title}</Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.quizScrollContainer}>
                {EDITSIGNINFO.field.map((item, index) => (
                  <InputField
                    key={index}
                    top={0.04 * height}
                    title={userProfile[item.name]}
                    field={item.name}
                    width={width * 0.85}
                    editable={item.name == 'username' ? false : true}
                    placeholder={item.placeholder}
                    change={(data, field) => {
                      //   console.log('We are year');
                      handleInputChange(data, field);
                    }}
                  />
                ))}
                {/* <View style={{marginTop: '10%', width: '100%'}}>
                  <CountrySelect />
                </View> */}
                <View>
                  <SubmitBtn
                    btnText={EDITSIGNINFO.btnText}
                    width={width * 0.85}
                    color={'#ffffff'}
                    textColor={'#0347A1'}
                    borderRadius={30}
                    topMargin={0.05 * height}
                    action={handleSubmit}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default EditUserInfo;
