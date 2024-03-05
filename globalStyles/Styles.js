import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const whiteColor = '#ffffff';
const blackColor = '#2C444E';
const black = '#000000';
const purpleColor = '#894284';
const blueColor = '#0347A1';
const grayColor = '#0797F8';
const mainFamilyHead = 'Roboto Bold';
const mainFamilyBody = 'Roboto';
const mainTextTitle = Math.min(width, height) * 0.07;
const mainTextSize = 5 * (Math.min(width, height) / 100);
const mainTextError = Math.min(width, height) * 0.025;
const textTitleMarginTop = Math.min(width, height) * 0.03;
const keyboardPaddingBottom = height * 0.5;
const homeCardMarginTop = -0.3 * height;
const homeCardRadius = 0.08 * width;
const homeCardPadding = 0.032 * width;
const homeBodyTextContainerMarginTop = 0.04 * height;
const homeBtnDimension = height * 0.085;
const homeBtnRadius = width * 0.15;
const homeBtnVerticalMargin = height * 0.05;
const inputFieldBtnWidth = width * 0.85;
const inputTextBorderWidth = width * 0.007;
const textOnBtnSize = Math.round(19 * (Math.min(width, height) / 320));
const inputTextFontSize = width * 0.06;
const inputTextPaddingHorizontal = width * 0.05;
const codeContainer = width * 0.3;
const telContainer = width * 0.05;
const separatorMargin = width * 0.02;
const dashboardHeadCardPaddingHorizontal = width * 0.04;
const dashboardHeadCardHeight = 0.25 * height;
const dashboardTitle = width * 0.09;
const dashboardCardContainerMarginTop = height * 0.02;
const dashboardCardWidth = 0.43 * width;
const dashboardCardRadius = 0.026 * height;
const dashboardCardMargin = 0.014 * width;
const dashboardCardImageWidth = width * 0.43;

const image2MarginTop = -0.9 * height;
const overlayTextTitleSize = 0.055 * width;
const overlaySubTextSize = 0.05 * width;

export default StyleSheet.create({
  /*** Store Card *****/
  accordionStoreListCard: {
    marginTop: 5,
    width: width * 0.9,
    backgroundColor: whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
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
    fontFamily: mainFamilyBody,
    fontSize: mainTextError,
  },
  textTitle: {
    fontFamily: mainFamilyHead,
    fontSize: mainTextTitle, // Adjust the multiplication factor as needed
    marginTop: textTitleMarginTop, // Adjust the multiplication factor as needed
    color: whiteColor,
    textAlign: 'center',
  },
  keyboardContainer: {
    flex: 1,
    paddingBottom: keyboardPaddingBottom,
  },
  homeCard: {
    marginTop: homeCardMarginTop, // Adjust the multiplication factor as needed
    backgroundColor: whiteColor,
    borderTopLeftRadius: homeCardRadius, // Adjust the multiplication factor as needed
    borderTopRightRadius: homeCardRadius, // Adjust the multiplication factor as needed
    padding: homeCardPadding, // Adjust the multiplication factor as needed
    height: keyboardPaddingBottom,
  },

  selectText: {
    fontFamily: mainFamilyBody,
    fontSize: inputTextFontSize,
  },

  quizbackgroundImage: {
    marginTop: '-60%',
  },
  quizBackgroundCard: {
    marginTop: '-50%',
    backgroundColor: blueColor,
    height: height,
  },
  homeHeadTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBodyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: homeBodyTextContainerMarginTop,
  },
  homeBodyText: {
    fontFamily: mainFamilyBody,
    fontSize: mainTextSize,
    color: blueColor,
    textAlign: 'center',
  },

  homeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBtn: {
    width: homeBtnDimension, // 95% of the screen width
    height: homeBtnDimension, // 7% of the screen height
    borderRadius: homeBtnRadius, // 15% of the screen width (adjust as needed)
    marginTop: homeBtnVerticalMargin, // 5% of the screen height
    marginBottom: homeBtnVerticalMargin, // 5% of the screen height
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBtn: {
    backgroundColor: grayColor,
    width: inputFieldBtnWidth,
    height: homeBtnDimension,
    borderRadius: homeBtnRadius,
    marginTop: homeBtnVerticalMargin,
    marginBottom: homeBtnVerticalMargin,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },

  /** Premium Button */
  premiumBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  premiumBtn: {
    marginTop: homeBtnVerticalMargin / 2,
    marginBottom: homeBtnVerticalMargin / 4,
    backgroundColor: blueColor,
    opacity: 1,
    // borderWidth: 4, // Set the border width
    // borderColor: grayColor,
    flexDirection: 'row',
  },

  /**End Premium Button Issues */

  /**Payment Button */
  paymentBtn: {
    backgroundColor: '#2C72D2',
  },
  /**End Payment Button */

  loadingBtnText: {
    fontFamily: mainFamilyBody,
    fontSize: textOnBtnSize,
    color: whiteColor,
  },

  homeBtnText: {
    fontFamily: mainFamilyBody,
    fontSize: textOnBtnSize,
    color: whiteColor,
  },

  textLabel: {
    fontSize: 15,
    color: whiteColor,
    marginBottom: 5,
  },

  textInput: {
    fontFamily: mainFamilyBody,
    width: inputFieldBtnWidth, // 95% of the screen width
    height: homeBtnDimension, // 9% of the screen height (adjust as needed)
    borderWidth: inputTextBorderWidth, // 1% of the screen width (adjust as needed)
    borderRadius: homeBtnRadius, // 6% of the screen width (adjust as needed)
    borderColor: whiteColor,
    color: whiteColor,
    fontSize: inputTextFontSize, // 5% of the screen width (adjust as needed)
    paddingLeft: inputTextPaddingHorizontal,
  },

  countryCodeContainer: {
    width: codeContainer,
  },

  countryInputTel: {
    borderRadius: telContainer,
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
    marginHorizontal: separatorMargin, // Adjust the margin as needed
  },

  orText: {
    fontFamily: mainFamilyBody,
    marginHorizontal: separatorMargin, // Adjust the margin as needed
    fontSize: 5 * (Math.min(width, height) / 100),
    color: blueColor,
  },

  /** Dashboard Styles */
  dashboardHeadCard: {
    flex: 1,
    backgroundColor: blueColor,
    borderBottomLeftRadius: homeCardRadius,
    borderBottomRightRadius: homeCardRadius,
    paddingHorizontal: dashboardHeadCardPaddingHorizontal,
    height: dashboardHeadCardHeight,
    width: width,
    overflow: 'hidden',
    alignItems: 'center',
  },

  dashboardHeadTextContainer: {
    flex: 1,
    marginTop: homeBtnVerticalMargin,
  },

  dashboardHeadTitle: {
    fontFamily: mainFamilyHead,
    color: whiteColor,
    fontSize: dashboardTitle,
  },
  dashboardHeadBody: {
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: inputTextFontSize,
  },
  dashboardCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dashboardCardContainerMarginTop / 2,
  },
  dashboardCard: {
    width: dashboardCardWidth, // Adjust as needed
    height: dashboardHeadCardHeight, // Adjust as needed
    borderRadius: dashboardCardRadius, // Adjust as needed
    backgroundColor: whiteColor,
    overflow: 'hidden',
    margin: dashboardCardMargin, // Adjust as needed
    // Adjust as needed
    shadowColor: black,
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
    width: dashboardCardImageWidth,
  },
  imageOptions: {
    marginHorizontal: '5%',
  },
  dashboardOverlay: {
    flex: 1, // Takes 1/4 of the card's height
    backgroundColor: blueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardOverlayText: {
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: inputTextFontSize,
  },

  /** Quiz Options */
  quizOptionLead: {
    backgroundColor: blueColor,
  },

  // quizTitleCard: {
  //   marginTop: -height,
  //   width: width * 0.8,
  //   backgroundColor: black,
  //   borderTopLeftRadius: 0.06 * width, // Adjust the multiplication factor as needed
  //   borderTopRightRadius: 0.06 * width, // Adjust the multiplication factor as needed
  //   height: 0.15 * height,
  // },

  quizOptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blueColor,
    height: height,
    width: width,
    // borderTopLeftRadius: 0.06 * width, // Adjust the multiplication factor as needed
    // borderTopRightRadius: 0.06 * width,
    // borderBottomLeftRadius: 0.06 * width,
    overflow: 'hidden',
  },

  quizScrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: homeBtnVerticalMargin,
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
    marginTop: image2MarginTop,
  },

  centeredOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    marginTop: height * 0.03,
  },

  secondView: {
    paddingHorizontal: homeBtnVerticalMargin,
    paddingVertical: 0.015 * height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background color
    height: height * 0.18,
    width: inputFieldBtnWidth,
    borderRadius: homeCardRadius,
  },

  overlayText: {
    fontFamily: mainFamilyHead,
    color: whiteColor,
    fontSize: overlayTextTitleSize,
  },

  overlaySubText: {
    fontFamily: mainFamilyBody,
    fontSize: overlaySubTextSize,
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

  questionTextContainer: {
    paddingHorizontal: '5%',
  },

  questionText: {
    fontFamily: mainFamilyBody,
    color: whiteColor,
  },

  answerContainer: {
    width: '100%',
    marginTop: textTitleMarginTop,
    alignItems: 'center',
  },

  optionItemContainer2: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: inputTextPaddingHorizontal,
    paddingVertical: 15,
    width: inputFieldBtnWidth,
    borderWidth: inputTextBorderWidth,
    borderRadius: homeBtnRadius,
    borderColor: whiteColor,
    marginVertical: homeBtnVerticalMargin / 3,
  },

  optionItem2: {
    color: whiteColor,
    fontSize: mainTextSize * 1.1,
    fontFamily: mainFamilyBody,
  },

  recordOverlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    // Add other styles for content on top of the background image
  },

  buttonContainer3: {
    backgroundColor: whiteColor,
    paddingHorizontal: 10 * (width / 375),
    paddingVertical: height * 0.012,
    width: inputFieldBtnWidth,
    height: height * 0.09,
    borderRadius: Math.round(width * 0.09),
    marginHorizontal: 0.025 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  whatsappBtn: {
    backgroundColor: 'green',
    borderRadius: Math.round(width * 0.09),
    marginVertical: '2%',
    height: 40,
    justifyContent: 'center',
  },

  buttonContainer2Text: {
    color: whiteColor,
    paddingHorizontal: 0.2 * width,
    fontFamily: mainFamilyBody,
  },

  buttonCircle: {
    // backgroundColor: '#EBEBEC',
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
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: mainTextSize,
    textTransform: 'uppercase',
  },

  quizType: {
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: mainTextSize,
    textTransform: 'uppercase',
  },

  quizQues: {
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: mainTextSize,
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
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: mainTextSize,
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
    fontFamily: mainFamilyBody,
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
    paddingVertical: 15,
    width: inputFieldBtnWidth,
    borderRadius: homeBtnRadius,
    backgroundColor: whiteColor,
    paddingHorizontal: inputTextPaddingHorizontal,
    marginVertical: homeBtnVerticalMargin / 3,
  },

  optionItem: {
    fontFamily: mainFamilyBody,
    color: black,
    fontSize: mainTextSize * 1.1,
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
    width: width * 0.85,
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
    fontFamily: mainFamilyBody,
    fontSize: 30,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },

  commentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  comment: {
    fontFamily: mainFamilyBody,
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
    fontFamily: mainFamilyHead,
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

  /** Game Result Two */
  gameResultTwoCard1: {
    flex: 1,
    width: inputFieldBtnWidth,
    backgroundColor: whiteColor,
    borderRadius: homeCardRadius,
    marginTop: '5%',
    overflow: 'hidden',
    alignItems: 'center',
  },

  gameResultTwoCard2: {
    flex: 0.7,
  },

  gameResultTwoCard3: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },

  gameResultScoreBoard: {
    backgroundColor: '#EBEBEC',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  gameResultScoreText: {
    fontFamily: mainFamilyBody,
    fontSize: mainTextSize,
    color: blueColor,
  },

  resultTwoImage: {
    marginTop: '-70%',
    marginLeft: '-23%',
  },

  markDetail: {
    borderRadius: 30,
    marginTop: '-110%',
    height: 40,
    borderWidth: 3,
    borderColor: blueColor,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
  },

  markDetailText: {
    fontFamily: mainFamilyBody,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
    color: blueColor,
  },

  /** Game Review */
  reviewSearchContainer: {
    flex: 0.4,
    flexDirection: 'row',
    width: inputFieldBtnWidth,
  },

  reviewSearchContainerTwo: {
    flexDirection: 'row',
    width: inputFieldBtnWidth,
  },

  /**Review Two */
  reviewCardTwo: {
    marginTop: '5%',
    flex: 0.6,
  },

  /** Review Card Two */
  reviewCardThree: {
    marginTop: '0%',
    paddingTop: '5%',
    height: height,
    flex: 1,
    alignItems: 'center',
    backgroundColor: blueColor,
  },

  reviewCardHeadContainer: {
    alignItems: 'left',
    width: '100%',
    paddingHorizontal: '14%',
    paddingBottom: '2%',
    marginTop: homeBtnVerticalMargin / 3,
  },

  reviewCardHeadTitle: {
    fontFamily: mainFamilyHead,
    fontSize: mainTextSize,
    color: '#fff',
  },

  reviewCardHeadSubTitle: {
    color: blueColor,
    fontFamily: mainFamilyBody,
    fontSize: mainTextSize * 0.9,
  },

  reviewQuestionCard: {
    width: inputFieldBtnWidth,
    backgroundColor: whiteColor,
    borderRadius: homeCardRadius,
    paddingVertical: '5%',
    paddingHorizontal: '7%',
    marginVertical: '5%',
  },

  searchWrapper: {
    flex: 1,
    paddingHorizontal: '3%',
  },

  homeBtnWrapper: {
    flex: 0.3,
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
    width: inputFieldBtnWidth,
    borderRadius: homeCardRadius,
    alignItems: 'center',
    paddingTop: '3%',
    marginTop: '5%',
  },

  questionTopicTitle: {
    fontFamily: mainFamilyHead,
    color: black,
    fontSize: mainTextSize * 0.9,
    fontWeight: 'bold',
  },

  questionTopicTitleSub: {
    fontFamily: mainFamilyBody,
    color: black,
    fontSize: 16,
    marginTop: 6,
  },

  topicTitle: {
    fontFamily: mainFamilyHead,
    color: whiteColor,
    fontSize: mainTextSize,
  },

  subTopicTitle: {
    fontSize: mainTextSize * 0.9,
    color: whiteColor,
  },

  reviewQuestion: {
    fontFamily: mainFamilyBody,
    paddingHorizontal: '2%',
    marginTop: '4%',
    fontSize: 20,
    color: blueColor,
  },

  reviewQuestionContainer: {
    marginHorizontal: '2%',
  },

  reviewAnsContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  reviewAnsText: {
    fontFamily: mainFamilyHead,
    fontSize: mainTextSize * 0.9,
  },

  reviewOptionsContainer: {
    marginTop: '5%',
  },

  reviewOptionsItemContainer: {
    width: '100%',
    borderRadius: homeBtnRadius,
    paddingVertical: '8%',
    paddingHorizontal: '10%',
    marginVertical: '3%',
  },

  reviewOptionText: {
    fontFamily: mainFamilyBody,
    fontSize: 18,
    color: whiteColor,
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
    color: whiteColor,
    fontFamily: mainFamilyBody,
    fontSize: 18,
    paddingVertical: '5%',
  },

  markRecordData: {
    flexDirection: 'row',
  },

  mark: {
    fontFamily: mainFamilyBody,
    fontSize: mainTextSize,
  },

  middleMark: {
    fontFamily: mainFamilyBody,
    fontSize: 14,
  },

  /** Question not available */
  questionNotAvailable: {
    fontFamily: mainFamilyHead,
    fontSize: mainTextSize,
    color: 'white',
    marginTop: '10%',
  },

  questionNotAvailImgContainer: {
    height: height * 0.4,
    width: width * 0.7,
    backgroundColor: whiteColor,
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
    width: width * 0.7,
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
    backgroundColor: blueColor,
    width: '96%',
    borderRadius: 10,
    height: '20%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    fontSize: mainTextSize,
    fontFamily: mainFamilyHead,
  },

  errorBtnText: {
    fontSize: mainTextSize,
    color: whiteColor,
    fontFamily: mainFamilyHead,
  },

  /** Record View Two */
  recordBackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // resizeMode: '',
  },

  floatBtnContainer: {
    flex: 0.09,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  homeBtnTwo: {
    backgroundColor: whiteColor,
    borderRadius: homeBtnRadius, // Adjust the borderRadius to make it more or less round
    height: homeBtnDimension,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeBtnThree: {
    paddingVertical: Math.round(height * 0.039),
  },

  recordCardContainer: {
    alignItems: 'center',
  },

  recordInfoCard: {
    width: '100%',
    alignItems: 'left',
  },

  recordStatusBarContainer: {
    width: inputFieldBtnWidth,
    height: homeBtnDimension,
    borderRadius: homeBtnRadius,
    backgroundColor: '#2C72D2',
    flexDirection: 'row',
    paddingHorizontal: '1%',
    paddingVertical: '1%',
    justifyContent: 'space-between',
    marginVertical: homeBtnVerticalMargin / 3,
  },

  completeBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: whiteColor,
    borderWidth: 3,
    marginRight: '1%',
  },

  retryBtn: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#042046',
    marginLeft: '1%',
    borderRadius: 30,
  },

  recordBtnText: {
    fontFamily: mainFamilyBody,
    color: whiteColor,
    fontSize: mainTextSize,
  },

  /** Record view card */
  viewRecordCard: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(225, 225, 225, 0.9)',
    width: inputFieldBtnWidth,
    alignItems: 'left',
    paddingHorizontal: '10%',
    paddingTop: '10%',
    paddingBottom: '5%',
    elevation: 5,
  },

  recordCardContainerResult: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recordCardMarks: {
    fontFamily: mainFamilyHead,
    fontSize: 25,
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
    fontFamily: mainFamilyHead,
  },

  /** Record Two */
  recordCardTwo: {
    borderBottomRightRadius: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordBody: {
    flex: 3,
  },

  recordInfoTextTitle: {
    fontFamily: mainFamilyHead,
    fontSize: mainTextSize,

    color: blueColor,
  },

  recordInfoText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: blueColor,
  },

  recordCardBtn: {
    width: '100%',
    height: homeBtnDimension,
    backgroundColor: blueColor,
    borderRadius: homeBtnRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recordCardBtnText: {
    fontFamily: mainFamilyBody,
    fontSize: 16,
    color: whiteColor,
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
    paddingVertical: '8%',
    elevation: 5,
  },
  dashboardHeadFAQ: {
    marginTop: '5%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordTitle: {
    fontFamily: mainFamilyBody,
    fontSize: mainTextSize,
    color: blueColor,
  },
  accordBody: {
    backgroundColor: whiteColor,
    color: blueColor,
    width: width * 0.9,
    padding: 12,
    paddingVertical: 20,
    alignItems: 'left',
    borderBottomRadius: 30,
  },
  textSmall: {
    fontSize: 16,
    color: blueColor,
  },
  seperator: {
    height: 12,
  },

  /** Settings */
  settingHeadCard: {
    elevation: 20,
    paddingVertical: '10%',
    marginTop: '-5%',
    marginBottom: '5%',
  },

  settingContainer: {
    width: width * 0.9,
    backgroundColor: whiteColor,
    height: 100,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },

  settingText: {
    fontFamily: mainFamilyBody,
    color: blackColor,
    fontSize: mainTextSize,
    paddingHorizontal: '10%',
  },

  backBtnContainer: {
    zIndex: 10,
    position: 'absolute',
    margin: '5%',
  },

  /** Scrollview container */
  scrollViewContainer: {
    flexDirection: 'row',
  },

  scrollViewCard: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  scrollViewCardText: {
    marginTop: 5,
    fontSize: 16,
  },

  scrollViewCardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  analysisCard: {
    flex: 1,
    width: width * 0.9,
    backgroundColor: whiteColor,
    paddingHorizontal: '10%',
    paddingTop: '10%',
    paddingBottom: '5%',
    borderRadius: 10,
  },

  analysisHeadContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },

  analysisHeadTitle: {
    fontSize: mainTextTitle,
  },

  analysisTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },

  analysisTableText: {
    fontFamily: mainFamilyBody,
    fontSize: mainTextSize,
    color: blueColor,
  },

  colorCode: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#fbd203',
    marginHorizontal: 2,
  },

  /** End scrollview container */
});
