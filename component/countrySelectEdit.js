import React, {useContext, useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../globalStyles/Styles';
import {AuthApiData} from '../contextApi/auth/authContextApi.js';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

const EditCountrySelect = ({top, change, formAction}) => {
  const {registerFormData, setRegisterFormData} = useContext(AuthApiData);
  console.log(formAction[0]);

  // telephone
  // country
  const [country, setCountry] = useState({
    name: 'Ghana',
    dial_code: '+233',
  });
  const [phone, setPhone] = useState(formAction[0].tel);
  const [selected, setSelected] = useState(formAction[0].code);

  useEffect(() => {
    // console.log(country);
    formAction[1]({
      ...formAction[0],
      country: country.name,
      code: country.dial_code,
    });
  }, [country]);

  useEffect(() => {
    formAction[1]({
      ...formAction[0],
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

export default EditCountrySelect;
