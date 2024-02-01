import {OPTIONS} from '../constant/gameboardConstant.js'

const ALL = 'All'
const WRONG = 'Wrongs'
const CORRECT = 'Correct'

// let getLetter = (one, choseAnswer) => {
//     let optionData = one.split('**');
//     let positionItem = optionData.indexOf(choseAnswer);
//     let getOptionRep = OPTIONS[positionItem];
//     console.log(choseAnswer)
//    // return getOptionRep.toLowerCase();
//   };

const filterAnswers = (theArray, filterType)=> {
    let data = theArray
    let filteredData
    if(filterType == CORRECT){
    filteredData = data.filter((item) => item.answer.toLowerCase() == item.userChoice)
    } else if (filterType == WRONG){
    filteredData = data.filter((item) => item.answer.toLowerCase() !== item.userChoice)
    } else {
    filteredData = data
    }
    return filteredData
}

export default filterAnswers