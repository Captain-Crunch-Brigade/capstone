import React from 'react';
import Answer from './Answer';
import MoreAnswers from './MoreAnswers'

const AnswerList = function ({aList}) {
  const [answerList, setAnswerList] = React.useState([]);
  const [listCount, setListCount] = React.useState(2)
  React.useEffect(() => {
    let listArr = [];
    for (let i in aList) {
      listArr.push(aList[i]);
    }
    if (listArr.length > listCount) {
      const renderArr = [];
      for (let i = 0; i < listArr.length && i < listCount; i++) {
        renderArr.push(listArr[i])
      }
      setAnswerList([...renderArr]);
    } else if (listArr.length > 0) {
      setAnswerList(listArr);
    } else {
      setAnswerList([]);
    }
  }, [aList, listCount]);
  return (
    <div>
      {answerList.map((item) => (
        <Answer answer={item} />
      ))}
      <MoreAnswers aList={aList} count={listCount} setCount={setListCount} />
    </div>
  );
};
export default AnswerList;
