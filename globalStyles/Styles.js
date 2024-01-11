import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const whiteColor = '#ffffff';
const blackColor = '#2C444E';
const black = '#000000';
const purpleColor = '#894284';

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
  errMsg: {
    color: whiteColor,
    fontSize: 10,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: whiteColor,
    textAlign: 'center',
  },
  keyboardContainer: {
    flex: 1,
    paddingBottom: '50%',
  },
  homeCard: {
    marginTop: '-60%',
    backgroundColor: blackColor,
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
    color: whiteColor,
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

  loadingBtn: {
    backgroundColor: '#efefef',
    width: 250,
    height: 50,
    borderRadius: 30,
    marginTop: '10%',
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },

  loadingBtnText: {
    fontSize: 19,
    color: '#ffffff',
  },

  homeBtnText: {
    fontSize: 19,
    color: whiteColor,
  },

  textLabel: {
    fontSize: 15,
    color: whiteColor,
    marginBottom: 5,
  },

  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: whiteColor,
    color: whiteColor,
    fontSize: 20,
    paddingLeft: 15,
  },

  /** Sign up options separator*/
  separateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: whiteColor, // Separator color
    marginHorizontal: 10, // Adjust the margin as needed
  },
  orText: {
    marginHorizontal: 10, // Adjust the margin as needed
    fontSize: 16,
    fontWeight: 'bold',
    color: whiteColor,
  },

  /** Dashboard Styles */
  dashboardHeadCard: {
    flex: 1,
    marginTop: 0,
    backgroundColor: purpleColor,
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
    color: whiteColor,
    fontSize: 35,
    fontWeight: 'bold',
  },
  dashboardHeadBody: {
    color: whiteColor,
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
    backgroundColor: purpleColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardOverlayText: {
    color: whiteColor,
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
    backgroundColor: purpleColor,
    height: height,
    width: width * 0.95,
    margin: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
  },

  quizScrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },

  /**Game board */
  gameBoard: {
    height: height,
  },

  scoreTimerBoard: {
    flex: 0.3,
    flexDirection: 'row',
  },

  gameOptionsContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subject: {
    color: whiteColor,
    fontSize: 15,
    textTransform: 'uppercase',
  },

  quizType: {
    color: whiteColor,
    fontSize: 18,
    textTransform: 'uppercase',
  },

  quizQues: {
    color: whiteColor,
    fontSize: 15,
  },

  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '5%',
  },

  quesNoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '50%',
  },

  timerScoreText: {
    color: whiteColor,
    fontSize: 17,
  },

  questionContainerBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: height * 0.5,
  },

  gameboardQuestionScrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  question: {
    color: whiteColor,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },

  optionContainer: {
    flex: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },

  optionItemContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    width: width * 0.9,
    borderRadius: 10,
    backgroundColor: whiteColor,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    marginBottom: 5,
  },

  optionItem: {
    color: black,
    fontSize: 18,
  },
});
