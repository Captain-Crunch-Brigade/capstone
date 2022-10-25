import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import MoreQuestions from './MoreQuestions';
import styled from 'styled-components';

const Scrollarea = styled.div`
  overflow-y: scroll;
  height: 400px;
`;
const QuestionList = function ({ list, search }) {
  const [renderList, setRenderList] = React.useState([]);
  const [listLength, setListLength] = React.useState(2)
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
      {renderList.map((item) => (
        <Question question={item} />
      ))}
      </Scrollarea>
      <MoreQuestions qList={list} count={listLength} setCount={setListLength}/>
    </div>
  )
};

// QuestionList.propTypes = {
//   list: PropTypes.Array,
//   search: PropTypes.String,
// };
// QuestionList.defaultProps = {
//   list : [],
//   search: '',
// };
export default QuestionList;