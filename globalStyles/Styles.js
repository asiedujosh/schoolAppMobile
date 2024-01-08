import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  /***** Styles For Home  *****/
  container: {
    flex: 1,
  },
  image: {
    marginTop: '-42%',
    width: width * 1.2, // Set the width as needed
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
  keyboardContainer: {
    flex: 1,
    paddingBottom: '50%',
  },
  homeCard: {
    marginTop: '-60%',
    backgroundColor: '#2C444E',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 16,
    height: 0.5 * height,
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

  textLabel: {
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 5,
  },

  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ffffff',
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 15,
  },

  /** Dashboard Styles */
  dashboardHeadCard: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#894284',
    borderBottomLeftRadius: 35,
    padding: 16,
    height: 0.3 * height,
    width: width,
    overflow: 'hidden',
  },
  dashboardHeadTextContainer: {
    flex: 1,
    width: 0.7 * width,
    marginTop: '-135%',
  },
  dashboardHeadImg: {
    marginTop: '-80%',
    marginLeft: '40%',
    width: 300, // Set the width as needed
    height: height, // Set the height as needed
    resizeMode: 'contain', // 'cover' or 'contain' or 'stretch' or 'repeat' or 'center'
    opacity: 0.8,
  },
  dashboardHeadTitle: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
  },
  dashboardHeadBody: {
    color: '#ffffff',
    fontSize: 22,
  },
  dashboardCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  dashboardCard: {
    width: width * 0.43,
    height: 250, // Adjust the height as needed
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    margin: 6,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  growEffect: {
    transform: [{scale: 1.1}], // Adjust the scale factor as needed
  },
  dashboardCardImage: {
    flex: 3, // Takes 3/4 of the card's height
    width: '10',
  },
  dashboardOverlay: {
    flex: 1, // Takes 1/4 of the card's height
    backgroundColor: '#894284',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardOverlayText: {
    color: '#ffffff',
    fontSize: 20,
  },

  /** Quiz Options */
  quizOptionLead: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  quizOptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#894284',
    height: height * 0.95,
    width: width * 0.95,
    margin: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
