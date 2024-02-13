import styles from '../globalStyles/Styles';
import {Text, View, FlatList} from 'react-native';

const ReviewTextOptions = ({data, dataInfo, checkColor}) => {
  return (
    <FlatList
      data={data.split('**')}
      pagingEnabled
      numColumns={1}
      renderItem={({item}) => {
        return (
          <View
            style={[
              {
                backgroundColor: checkColor(
                  data,
                  dataInfo[0],
                  dataInfo[1],
                  item,
                ),
              },
              styles.reviewOptionsItemContainer,
            ]}>
            <Text style={styles.reviewOptionText}>{item}</Text>
          </View>
        );
      }}
    />
  );
};

export default ReviewTextOptions;
