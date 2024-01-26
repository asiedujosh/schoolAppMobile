const Marks = (searchTerm, searchArray, type) => {
  let quizId =
    type === 'Ans' ? 'someCorrectMarkProperty' : 'someNoOfQuestionsProperty';
  console.log(`searchTerm ${searchTerm}`);

  let dataFilter = searchArray.filter(item => item.quizId === searchTerm);
  console.log(dataFilter);

  if (dataFilter.length > 0) {
    let correctAns = dataFilter[0].correctMark;
    let fullQuest = dataFilter[0].noOfQuestions;

    if (type === 'Ans') {
      return correctAns;
    } else {
      return fullQuest;
    }
  } else {
    // Handle the case where no matching item is found
    return type === 'Ans' ? 0 : 0; // You may want to adjust the default values
  }
};

export default Marks;
