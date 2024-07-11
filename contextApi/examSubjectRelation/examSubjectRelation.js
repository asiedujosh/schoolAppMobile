import axios from 'axios';
import {SUCCESS_STATUS, URL} from '../../constant/httpConstant';

// export const searchExamSubjectRelation = async data => {
//   try {
//     let responseOnSearchExamSubject = await axios.get(
//       `${URL}/api/searchExamSubject?keyword=${data}`,
//     );
//     if (responseOnSearchExamSubject) {
//       if (responseOnSearchExamSubject.status === SUCCESS_STATUS) {
//         return responseOnSearchExamSubject.data;
//       }
//     } else {
//       return false;
//     }
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

export const getAllExamSubjectLink = async () => {
  try {
    let responseOnGetAllExamSubject = await axios.get(
      `${URL}/api/mobileGetAllLinkedExamSubject`,
    );
    if (responseOnGetAllExamSubject) {
      if (responseOnGetAllExamSubject.status === SUCCESS_STATUS) {
        return responseOnGetAllExamSubject.data;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
