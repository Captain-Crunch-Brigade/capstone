import React from 'react';
import Question from './Question.jsx';
import PropTypes from 'prop-types';
const QuestionList = function ({ list }) {
  const [renderList, setRenderList] = React.useState([]);
  React.useEffect(() => {
    console.log('propls.list: ', list);
    if (list.length > 2) {
     setRenderList([list[0], list[1]]);
    // setRenderList(list.slice(0, 2));
     // setRenderList(list);
    } else if (list.length > 0) {
      setRenderList(list);
    } else {
      setRenderList([]);
    }
  }, list);
  return (
    <div>
      {renderList.map((item) => (
        <Question question={item} />
      ))}

      <button type="button"> if more questiosn button </button>
    </div>
  )

}

QuestionList.propTypes = {
  list: PropTypes.Array,
};
QuestionList.defaultProps = {
  list : [],
};
export default QuestionList;