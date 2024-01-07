import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  /***** Styles For Home  *****/
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: height * 0.25,
  },
  image: {
    width: width * 1.1, // Set the width as needed
    height: height, // Set the height as needed
    resizeMode: 'contain', // 'cover' or 'contain' or 'stretch' or 'repeat' or 'center'
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  homeCard: {
    backgroundColor: '#2C444E',
    borderRadius: 35,
    padding: 16,
    marginTop: height * 0.2,
    height: 0.7 * height,
  },
  homeHeadTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBodyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  homeBodyText: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  },

  homeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBtn: {
    width: 250,
    height: 50,
    borderRadius: 30,
    marginTop: '10%',
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeBtnText: {
    fontSize: 19,
    color: '#ffffff',
  },
});
