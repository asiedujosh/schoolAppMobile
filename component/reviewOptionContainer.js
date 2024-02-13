import ReviewTextOptions from './reviewTextOptions';
import ReviewEquationOptions from './reviewEquationOptions';
import ReviewImageOptions from './reviewImageOptions';

const ReviewOptionsContainer = ({optionType, checkColor, dataInfo}) => {
  if (optionType[0] !== null && optionType[0] !== '') {
    return (
      <ReviewTextOptions
        checkColor={checkColor}
        dataInfo={dataInfo}
        data={optionType[0]}
      />
    );
  }

  if (optionType[1] !== null && optionType[1] !== '') {
    console.log(optionType[1]);
    return (
      <ReviewImageOptions
        checkColor={checkColor}
        dataInfo={dataInfo}
        imgData={optionType[1]}
      />
    );
  }

  if (optionType[2] !== null && optionType[2] !== '') {
    return (
      <ReviewEquationOptions
        checkColor={checkColor}
        dataInfo={dataInfo}
        data={optionType[2]}
      />
    );
  }
};

export default ReviewOptionsContainer;
