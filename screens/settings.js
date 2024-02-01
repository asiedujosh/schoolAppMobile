import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../globalStyles/Styles';
import {settingConstant} from '../constant/settingConstant';
import KeyboardAvoidingContainer from '../component/keyboardAvoidingContainer';

const Settings = ({navigation}) => {
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
              <Text style={[styles.dashboardHeadTitle, {paddingBottom: '2%'}]}>
                {settingConstant.title}
              </Text>
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={{flex: 1}}>
              <FlatList
                data={settingConstant.list}
                keyExtractor={item => item.id}
                pagingEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                renderItem={({item}) => {
                  return (
                    <Pressable
                      onPress={() => {
                        navigation.navigate(item.link);
                      }}
                      style={[
                        styles.correctContainer,
                        styles.settingContainer,
                      ]}>
                      <Icon name={item.icon} size={30} color="#EBEBEC" />
                      <Text style={styles.settingText}>{item.title}</Text>
                    </Pressable>
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

export default Settings;
