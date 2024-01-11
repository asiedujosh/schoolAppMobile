// const headImg = require('../assets/img/study.png');
const cardOneImg = require('../assets/img/quiz.png');
const cardTwoImg = require('../assets/img/records.jpg');
const cardThreeImg = require('../assets/img/analyze.jpg');
const cardFourImg = require('../assets/img/setting.jpg');
const cardFiveImg = require('../assets/img/faq.jpg');
const cardSixImg = require('../assets/img/review.jpg');

export const DASHBOARD = {
  headTitle: `Hi Josh,`,
  headBody: `How are you preparing ${'\n'}for your exams ${'\n'}Today?`,
  //   headImg: headImg,
  dashboardCards: [
    {
      title: 'Quiz',
      cardImage: cardOneImg,
      link: 'Quiz',
    },
    {
      title: 'Records',
      cardImage: cardTwoImg,
      link: 'Record',
    },
    {
      title: 'Analyze',
      cardImage: cardThreeImg,
      link: 'Analyze',
    },
    {
      title: 'Setting',
      cardImage: cardFourImg,
      link: 'Setting',
    },
    {
      title: 'Faq',
      cardImage: cardFiveImg,
      link: 'Faq',
    },
    {
      title: 'Review',
      cardImage: cardSixImg,
      link: 'Review',
    },
  ],
};