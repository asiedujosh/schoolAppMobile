import styles from '../globalStyles/Styles';
import {Text, Pressable} from 'react-native';

const SubmitBtn = ({
  btnText,
  topMargin,
  width,
  borderRadius,
  action,
  textColor,
  color,
}) => {
  const handleAction = () => {
    action();
  };

  let newColor = color ? color : '#D268CC';

  return (
    <Pressable
      style={({pressed}) => [
        styles.homeBtn,
        {backgroundColor: pressed ? '#0797F8' : newColor},
        {marginTop: topMargin && topMargin},
        {borderRadius: borderRadius && borderRadius},
        {width: width && width},
      ]}
      onPress={handleAction}>
      <Text style={[styles.homeBtnText, {color: textColor && textColor}]}>
        {btnText}
      </Text>
    </Pressable>
  );
};

export default SubmitBtn;
