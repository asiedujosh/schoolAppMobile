import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const whiteColor = '#ffffff';
const blackColor = '#2C444E';
const black = '#000000';
const purpleColor = '#894284';
const blueColor = '#0347A1';

export default StyleSheet.create({
  /***** Styles For Home  *****/
  container: {
    flex: 1,
  },
  image: {
    marginTop: -height * 0.21, // Responsive marginTop
    width: width * 1.2, // Set the width as needed
    height: height, // Set the height as needed
    resizeMode: 'contain', // 'cover' or 'contain' or 'stretch' or 'repeat' or 'center'
  },
  errMsg: {
    color: whiteColor,
    fontSize: Math.min(width, height) * 0.025,
  },
  textTitle: {
    fontSize: Math.min(width, height) * 0.06, // Adjust the multiplication factor as needed
    fontWeight: 'bold',
    marginTop: Math.min(width, height) * 0.03, // Adjust the multiplication factor as needed
    color: whiteColor,
    textAlign: 'center',
  },
  keyboardContainer: {
    flex: 1,
    paddingBottom: height * 0.5,
  },
  homeCard: {
    marginTop: -0.3 * height, // Adjust the multiplication factor as needed
    backgroundColor: whiteColor,
    borderTopLeftRadius: 0.06 * width, // Adjust the multiplication factor as needed
    borderTopRightRadius: 0.06 * width, // Adjust the multiplication factor as needed
    padding: 0.032 * width, // Adjust the multiplication factor as needed
    height: 0.5 * height,
  },
  quizbackgroundImage: {
    marginTop: '-60%',
  },
  quizBackgroundCard: {
    marginTop: '-50%',
    backgroundColor: '#0347A1',
    height: height,
  },
  homeHeadTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBodyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.04 * height,
  },
  homeBodyText: {
    fontSize: 5 * (Math.min(width, height) / 100),
    color: blueColor,
    textAlign: 'center',
  },

  homeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBtn: {
    width: width * 0.95, // 95% of the screen width
    height: height * 0.085, // 7% of the screen height
    borderRadius: width * 0.15, // 15% of the screen width (adjust as needed)
    marginTop: height * 0.05, // 5% of the screen height
    marginBottom: height * 0.05, // 5% of the screen height
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBtn: {
    backgroundColor: '#efefef',
    width: width * 0.8,
    height: height * 0.085,
    borderRadius: width * 0.15,
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
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
    width: width * 0.95, // 95% of the screen width
    height: height * 0.085, // 9% of the screen height (adjust as needed)
    borderWidth: width * 0.007, // 1% of the screen width (adjust as needed)
    borderRadius: width * 0.1, // 6% of the screen width (adjust as needed)
    borderColor: whiteColor,
    color: whiteColor,
    fontSize: width * 0.06, // 5% of the screen width (adjust as needed)
    paddingLeft: width * 0.05,
  },

  ignorePadding: {
    paddingLeft: 0,
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
    backgroundColor: blueColor, // Separator color
    marginHorizontal: width * 0.02, // Adjust the margin as needed
  },

  orText: {
    marginHorizontal: width * 0.02, // Adjust the margin as needed
    fontSize: 5 * (Math.min(width, height) / 100),
    fontWeight: 'bold',
    color: blueColor,
  },

  /** Dashboard Styles */
  dashboardHeadCard: {
    flex: 1,
    backgroundColor: blueColor,
    borderBottomLeftRadius: width * 0.13,
    paddingHorizontal: width * 0.04,
    height: 0.3 * height,
    width: width,
    overflow: 'hidden',
    alignItems: 'center',
  },
  dashboardHeadTextContainer: {
    flex: 1,
    marginTop: height * 0.05,
  },

  dashboardHeadTitle: {
    color: whiteColor,
    fontSize: width * 0.09,
    fontWeight: 'bold',
  },
  dashboardHeadBody: {
    color: whiteColor,
    fontSize: width * 0.06,
  },
  dashboardCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  dashboardCard: {
    width: 0.43 * width, // Adjust as needed
    height: 0.25 * height, // Adjust as needed
    borderRadius: 0.026 * height, // Adjust as needed
    backgroundColor: '#fff',
    overflow: 'hidden',
    margin: 0.014 * width, // Adjust as needed
    // Adjust as needed
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.01 * height}, // Adjust as needed
    shadowOpacity: 0.3,
    shadowRadius: 0.03 * height, // Adjust as needed
    elevation: 5,
  },
  growEffect: {
    transform: [{scale: 1.1}], // Adjust the scale factor as needed
  },
  dashboardCardImage: {
    flex: 3, // Takes 3/4 of the card's height
    width: width * 0.43,
  },
  dashboardOverlay: {
    flex: 1, // Takes 1/4 of the card's height
    backgroundColor: blueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardOverlayText: {
    color: whiteColor,
    fontSize: width * 0.06,
  },

  /** Quiz Options */
  quizOptionLead: {
    backgroundColor: blueColor,
  },

  quizTitleCard: {
    marginTop: -height,
    width: width * 0.8,
    backgroundColor: '#000',
    borderTopLeftRadius: 0.06 * width, // Adjust the multiplication factor as needed
    borderTopRightRadius: 0.06 * width, // Adjust the multiplication factor as needed
    height: 0.15 * height,
  },

  quizOptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blueColor,
    height: height,
    width: width,
    borderTopLeftRadius: 0.06 * width, // Adjust the multiplication factor as needed
    borderTopRightRadius: 0.06 * width,
    borderBottomLeftRadius: 0.06 * width,
    overflow: 'hidden',
  },

  quizScrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0.05 * height,
  },

  firstView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    width: width,
    height: height,
    resizeMode: 'contain',
    marginTop: -1 * height,
  },

  centeredOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  secondView: {
    paddingHorizontal: 0.05 * height,
    paddingVertical: 0.015 * height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background color
    height: height * 0.18,
    width: width * 0.7,
    borderRadius: 0.06 * width,
  },

  overlayText: {
    color: 'white',
    fontSize: 0.055 * width,
    fontWeight: 'bold',
  },

  overlaySubText: {
    fontWeight: 'regular',
    fontSize: 0.05 * width,
    paddingHorizontal: '0%',
    paddingTop: '2%',
  },

  questionCard: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 0.23 * height,
    height: 0.8 * height,
    backgroundColor: blueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  questionText: {
    color: whiteColor,
    fontSize: 20 * (Math.min(width, height) / 100),
    marginHorizontal: 0.05 * width,
    marginTop: 0.05 * height,
  },

  answerContainer: {
    marginTop: 0.03 * height,
  },

  optionItemContainer2: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: width * 0.9,
    borderWidth: width * 0.007,
    borderRadius: Math.round(width * 0.09),
    borderColor: whiteColor,
    marginVertical: Math.round(height * 0.015),
  },

  optionItem2: {
    color: whiteColor,
    fontSize: 55 * (Math.min(width, height) / 1000),
  },

  buttonContainer3: {
    backgroundColor: whiteColor,
    paddingHorizontal: 10 * (width / 375),
    paddingVertical: height * 0.012,
    width: width * 0.9,
    height: height * 0.09,
    borderRadius: Math.round(width * 0.09),
    marginHorizontal: 0.025 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonContainer2Text: {
    color: whiteColor,
    paddingHorizontal: 0.2 * width,
  },

  buttonCircle: {
    backgroundColor: '#EBEBEC',
    borderRadius: Math.round(width * 0.09), // Adjust the borderRadius to make it more or less round
    paddingVertical: Math.round(height * 0.02),
    paddingHorizontal: Math.round(width * 0.055),
    alignItems: 'center',
    justifyContent: 'center',
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
    width: width * 0.9,
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

  /** Game Result View */
  gameResultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blueColor,
    height: height,
    width: width,
  },

  gameResultContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: purpleColor,
    width: width,
  },

  gameResultCard: {
    marginTop: 20,
    flex: 2,
    borderRadius: 20,
    backgroundColor: whiteColor,
    width: width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultImageContainer: {
    marginTop: '-10%',
  },

  resultImage: {
    width: 250, // Set the width as needed
    height: 300, // Set the height as needed
    resizeMode: 'contain',
  },

  marksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mark: {
    fontSize: 30,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },

  commentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  comment: {
    fontSize: 20,
  },

  statCard: {
    marginTop: 20,
    flex: 1,
    borderRadius: 20,
    backgroundColor: whiteColor,
    width: width * 0.95,
    alignItems: 'center',
    overflow: 'hidden',
  },

  statHeadContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  statBodyContainer: {
    marginTop: 10,
  },

  statHeadText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer2: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerButton2: {
    marginHorizontal: '2%',
  },

  resultSeparator: {
    height: 1.5,
    width: 150,
    backgroundColor: blackColor, // Separator color
    marginTop: 5,
  },

  /** Game Review */
  reviewSearchContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },

  searchWrapper: {
    flex: 1,
    paddingHorizontal: '3%',
  },

  homeBtnWrapper: {
    flex: 0.5,
  },

  topicContainer: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: '5%',
  },

  scrollContainer: {
    flex: 4,
  },

  questionContainer: {
    backgroundColor: whiteColor,
    width: width * 0.9,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: '3%',
    marginTop: '5%',
  },

  questionTopicTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  questionTopicTitleSub: {
    color: '#000000',
    fontSize: 16,
    marginTop: 6,
  },

  topicTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  subTopicTitle: {
    fontSize: 18,
    color: '#ffffff',
  },

  reviewQuestion: {
    paddingHorizontal: '5%',
  },

  reviewQuestionContainer: {
    marginHorizontal: '3%',
  },

  reviewAnsContainer: {
    flexDirection: 'row',
  },

  reviewAnsText: {
    marginHorizontal: '2%',
    fontWeight: 'bold',
    fontSize: 18,
  },

  reviewOptionsContainer: {
    marginTop: '5%',
  },

  reviewOptionsItemContainer: {
    width: width * 0.8,
    borderRadius: 15,
    backgroundColor: purpleColor,
    marginVertical: '3%',
  },

  reviewOptionText: {
    fontSize: 18,
    color: '#ffffff',
    paddingVertical: '3%',
    paddingHorizontal: '3%',
  },

  markContainer: {
    marginBottom: '5%',
  },

  correctContainer: {
    width: width * 0.8,
    borderRadius: 5,
    backgroundColor: 'green',
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrongContainer: {
    width: width * 0.8,
    borderRadius: 10,
    backgroundColor: 'red',
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  markText: {
    color: '#ffffff',
    fontSize: 18,
    paddingVertical: '5%',
  },

  markRecordData: {
    flexDirection: 'row',
  },

  mark: {
    fontSize: 20,
  },

  middleMark: {
    fontSize: 14,
  },

  /** Question not available */
  questionNotAvailable: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '10%',
  },

  questionNotAvailImgContainer: {
    height: height * 0.4,
    width: width * 0.7,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '5%',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    overflow: 'hidden',
  },

  errorModalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  errorCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: height / 3,
    width: width * 0.6,
  },

  errorImgContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorImg: {
    width: width * 0.2,
    height: height * 0.2,
    resizeMode: 'contain',
    paddingHorizontal: '20%',
  },

  errorTextContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorBtn: {
    backgroundColor: purpleColor,
    width: '96%',
    borderRadius: 10,
    height: '20%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  errorBtnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  /** Record view card */
  viewRecordCard: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: whiteColor,
    width: 300,
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '10%',
  },

  recordCardContainerResult: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recordCardMarks: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: '2%',
  },

  recordSubjects: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusContainer: {
    backgroundColor: purpleColor,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },

  // statusText: {
  //   color: '#fff',
  // },

  examsDate: {
    fontWeight: 'bold',
  },

  /** FAQ */
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: whiteColor,
    color: blackColor,
    flex: 1,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dashboardHeadFAQ: {
    marginTop: '5%',
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    width: width * 0.9,
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
    color: whiteColor,
  },
  seperator: {
    height: 12,
  },

  /** Settings */
  settingContainer: {
    width: width * 0.9,
    backgroundColor: whiteColor,
    height: 100,
  },

  settingText: {
    color: blackColor,
    fontSize: 20,
    paddingHorizontal: '10%',
  },
});
