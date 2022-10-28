import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: transparent;
  border: 1px solid black;
  font-family: 'Archivo', sans-serif;
  width: 150px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const MoreQuestions = function ({ qList, count, setCount}) {
  const clickhandler = (event) => {
    event.preventDefault();
    setCount(count + 2);
  };
  return (
    <div>
      {qList.length > count && <Btn type="Btn" onClick={(event) => { clickhandler(event); }}>More Answered Questions</Btn>}
    </div>
  );
};
export default MoreQuestions;
