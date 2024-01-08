import {View} from 'react-native';
import {SIGNUP} from '../constant/homeConstant';
import InputField from './inputField';
import styles from '../globalStyles/Styles';
import SubmitBtn from './submitBtn';

const SubSignUpTwo = ({signUpdateFunction}) => {
  const handleInputChange = (data, field) => {
    signUpdateFunction[3]({...signUpdateFunction[2], [field]: data});
  };

  const handleStageChange = () => {
    let i = signUpdateFunction[0] + 1;
    if (i > 3) {
      console.log('We are registering...');
    } else {
      signUpdateFunction[1](i);
    }
  };

  return (
    <>
      <View style={styles.homeBodyTextContainer}>
        {SIGNUP.field2.map((item, index) => (
          <InputField
            key={index}
            top={item.label == SIGNUP.field2[0].label ? '2%' : '5%'}
            title={item.label}
            field={item.name}
            placeholder={item.placeholder}
            change={(data, field) => {
              handleInputChange(data, field);
            }}
          />
        ))}
      </View>
      <View style={styles.homeBtnContainer}>
        <SubmitBtn btnText={SIGNUP.btnText[0]} action={handleStageChange} />
      </View>
    </>
  );
};

export default SubSignUpTwo;
