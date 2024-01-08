import React from 'react';
import styles from '../globalStyles/Styles';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

const CountrySelect = () => {
  const [selected, setSelected] = React.useState('+91');
  const [country, setCountry] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <CountryCodeDropdownPicker
      selected={selected}
      setSelected={setSelected}
      setCountryDetails={setCountry}
      countryCodeTextStyles={{fontSize: 13}}
      dropdownStyles={styles.textInput}
    />
  );
};

export default CountrySelect;
