import React from 'react';
import styled from 'styled-components';
import Answer from './Answer';
import MoreAnswers from './MoreAnswers'

const Scrollarea = styled.div`
  overflow-y: scroll;
  max-height: 80px;
  min-width: 50%;
`;
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
      <Scrollarea>
        {answerList.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </Scrollarea>
      <MoreAnswers aList={aList} count={listCount} setCount={setListCount} />
    </div>
  );
};
export default AnswerList;
