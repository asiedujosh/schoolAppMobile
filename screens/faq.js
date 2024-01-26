import {useState, useContext} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../globalStyles/Styles';
import AccordionItem from '../component/accordionItem';
import {FaqConstants} from '../constant/faqConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const FAQ = ({navigation}) => {
  return (
    <KeyboardAvoidingContainer>
      <View style={styles.quizOptionLead}>
        <View style={styles.gameResultContainer}>
          <View style={styles.dashboardHeadFAQ}>
            <Text style={[styles.dashboardHeadTitle, {paddingBottom: '2%'}]}>
              {FaqConstants.title}
            </Text>
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
                        <Text style={styles.textSmall}>{item.answer}</Text>
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
