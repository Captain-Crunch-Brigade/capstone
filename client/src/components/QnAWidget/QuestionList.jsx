import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './Question';
import MoreQuestions from './MoreQuestions';

const Scrollarea = styled.div`
  overflow-y: scroll;
  max-height: 400px;
  min-width: 50%;
`;
const QuestionList = function ({ list, search }) {
  const [renderList, setRenderList] = React.useState([]);
  const [listLength, setListLength] = React.useState(4)
  React.useEffect(() => {
    if (list.length > listLength) {
      let i = 0;
      const setArr = [];
      if (search.length >= 3) {
        while (i < list.length && setArr.length < listLength) {
          if(list[i].question_body.includes(search) || list[i].asker_name.includes(search)) {
            setArr.push(list[i]);
          }
          i += 1;
        }
        setRenderList(setArr)
      } else {
        for (let j = 0; j < list.length; j++) {
          if (setArr.length < listLength) {
            setArr.push(list[j])
          }
        }
        setRenderList(setArr);
      }
    } else if (list.length > 0) {
      setRenderList(list);
    } else {
      setRenderList([]);
    }
  }, [list, search, listLength]);
  return (
    <div>
      <Scrollarea>
        {renderList.map((question, idx) => (
          <Question key={idx} question={question} />
        ))}
      </Scrollarea>
      <MoreQuestions qList={list} count={listLength} setCount={setListLength}/>
    </div>
  )
};
export default QuestionList;
