import React from 'react';
import Answer from './Answer';

const AnswerList = function ({aList}) {
  const [answerList, setAnswerList] = React.useState([]);
  React.useEffect(() => {
    let listArr = [];
    for (let i in aList){
      listArr.push(aList[i]);
    }
    if (listArr.length > 2) {
      setAnswerList([listArr[0], listArr[1]]);
    // setRenderList(list.slice(0, 2));
     // setRenderList(list);
    } else if (listArr.length > 0) {
      setAnswerList(listArr);
    } else {
      setAnswerList([]);
    }
  }, aList);
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
