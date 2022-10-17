import React from 'react';

const MoreQuestions = function ({ qList, count, setCount}) {
  const clickhandler = (event) => {
    event.preventDefault();
    setCount(count + 2);
  };
  return (
    <div>
      {qList.length > count && <button type="button" onClick={(event) => { clickhandler(event); }}>More Questions</button>}
    </div>
  );
};
export default MoreQuestions;
