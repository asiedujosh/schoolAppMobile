import {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import styles from '../globalStyles/Styles';
import {REVIEW} from '../constant/reviewConstant';
import SelectField from '../component/selectField';
import SubmitBtn from '../component/submitBtn';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Review = ({navigation}) => {
  const [review, setReview] = useState({
    reviewOption: REVIEW.selectOptions.options[0],
  });
  const [selectedValue, setSelectedValue] = useState('');

  let handleHomeBtn = () => {
    console.log('We are going home');
  };

  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.reviewSearchContainer}>
            <View style={styles.searchWrapper}>
              <SelectField
                title={REVIEW.selectOptions.label}
                field={REVIEW.selectOptions.name}
                top={'0%'}
                option={REVIEW.selectOptions.options}
                change={[selectedValue, setSelectedValue, review, setReview]}
              />
            </View>
            <View style={styles.homeBtnWrapper}>
              <SubmitBtn
                btnText={'Home'}
                width={100}
                borderRadius={30}
                topMargin={'20%'}
                action={handleHomeBtn}
              />
            </View>
          </View>
          <View style={styles.topicContainer}>
            <Text style={styles.topicTitle}>CHEMISTRY</Text>
            <Text style={styles.subTopicTitle}>WASSCE MAY / JUNE 2022</Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.questionContainer}>
                <Text style={styles.questionTopicTitle}>Topic</Text>
                <Text style={styles.questionTopicTitleSub}>Question 12</Text>
                <View>
                  <Text style={styles.reviewQuestion}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet justo nec magna interdum egestas
                    pellentesque rhoncus quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum sit amet justo nec
                    magna interdum egestas pellentesque rhoncus quam. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet justo nec magna interdum egestas
                    pellentesque rhoncus quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum sit amet justo nec
                    magna interdum egestas pellentesque rhoncus quam. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet justo nec magna interdum egestas
                    pellentesque rhoncus quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum sit amet justo nec
                    magna interdum egestas pellentesque rhoncus quam. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet justo nec magna interdum egestas
                    pellentesque rhoncus quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum sit amet justo nec
                    magna interdum egestas pellentesque rhoncus quam. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet justo nec magna interdum egestas
                    pellentesque rhoncus quam. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum sit amet justo nec
                    magna interdum egestas pellentesque rhoncus quam. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet justo nec magna interdum egestas
                    pellentesque rhoncus quam.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default Review;
