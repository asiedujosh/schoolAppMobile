import {Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import PageBackBtn from '../component/backPageBtn.js';
import AccordionItem from '../component/accordionItem';
import {FaqConstants} from '../constant/faqConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const FAQ = ({navigation}) => {
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
                {FaqConstants.title}
              </Text>
              <View style={styles.homeBtnWrapper}>
                <PageBackBtn navigation={navigation} />
              </View>
            </View>
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <FlatList
                data={FaqConstants.qna}
                keyExtractor={item => item.id}
                pagingEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <View>
                      <AccordionItem title={item.question}>
                        <Text style={styles.textSmall}>
                          <Text style={{fontWeight: 'bold'}}>Answer:</Text>{' '}
                          {item.answer}
                        </Text>
                      </AccordionItem>
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default FAQ;
