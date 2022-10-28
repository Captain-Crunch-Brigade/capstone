import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  font-family: 'Karla', sans-serif;
  text-decoration: underline;
  text-decoration-color: black;

  &:hover {
    cursor: pointer;
  }
`;

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
      {listArr.length > count && <Btn type="button" onClick={(event) => { clickhandler(event); }}>More Answers</Btn>}
      {listArr.length < count && count > 2 && <Btn type="button" onClick={(event) => { clickCloser(event); }}>Collapse Answers</Btn>}
    </div>
  );
}
export default MoreAnswers;
