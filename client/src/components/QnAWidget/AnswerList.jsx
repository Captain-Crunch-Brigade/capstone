import React from 'react';
import Answer from './Answer';

const AnswerList = function (props) {
  const [answerList, setAnswerList] = React.useState([]);
  React.useEffect(() => {
    //  test props.alist for length if > 2 setstate to just the first 2 items
  }, []);
  return (
    <div>
      {answerList.map((item) => (
        <Answer answer={item} />
      ))}
      <button type="button">if more answers button</button>
    </div>
  );
};
export default AnswerList;
