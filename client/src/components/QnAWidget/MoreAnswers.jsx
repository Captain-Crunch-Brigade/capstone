import React from 'react';

const MoreAnswers = function ({aList, count, setCount}) {
  const clickhandler = (event) => {
    event.preventDefault();
    setCount(count + 2);
  };
  const clickCloser = (event) => {
    event.preventDefault();
    setCount(2);
  };
  let listArr = [];
  for (let i in aList) {
    listArr.push(aList[i]);
  }
  return (
    <div>
      {listArr.length > count && <button type="button" onClick={(event) => { clickhandler(event); }}>More Answers</button>}
      {listArr.length < count && count > 2 && <button type="button" onClick={(event) => { clickCloser(event); }}>Collapse Answers</button>}
    </div>
  );
}
export default MoreAnswers;
