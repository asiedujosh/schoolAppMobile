import React, {useContext, useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../globalStyles/Styles';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

const CountrySelect = ({top, change}) => {
  const {registerFormData, setRegisterFormData} = useContext(AuthApiData);
  // telephone
  // country
  const [country, setCountry] = useState({
    name: 'Ghana',
    dial_code: '+233',
  });
  const [phone, setPhone] = useState(' ');
  const [selected, setSelected] = useState('+233');

  // useEffect(() => {
  //   // console.log(country);
  //   handleInputChange(country, 'country');
  //   handleInputChange(phone, 'telephone');
  // }, [selected, phone, country]);

  useEffect(() => {
    setRegisterFormData({
      ...registerFormData,
      country: {
        name: country.name,
        dial_code: country.dial_code,
      },
    });
    // handleInputChange(country, 'country');
  }, [country]);

  useEffect(() => {
    setRegisterFormData({
      ...registerFormData,
      tel: phone,
    });
  }, [phone]);

  return (
    <View style={{marginTop: top, width: '90%'}}>
      <CountryCodeDropdownPicker
        selected={selected}
        setSelected={setSelected}
        setCountryDetails={setCountry}
        phone={phone}
        setPhone={setPhone}
        countryCodeTextStyles={{fontSize: 20}}
        phoneStyles={[styles.textInput, styles.countryInput]}
        countryCodeContainerStyles={[
          styles.textInput,
          styles.countryCodeContainer,
        ]}
        searchTextStyles={{fontSize: 20}}
      />
    </View>
  );
};

export default CountrySelect;
