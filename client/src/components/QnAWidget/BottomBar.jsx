import React from 'react';
import styled from 'styled-components';
import QuestionForm from './QuestionForm';

const Btn = styled.button`
  background-color: transparent;
  font-family: 'Archivo', sans-serif;
  border: 1px solid black;
  width: 150px;
  height: 50px;

  transform: translate(110%, -100%);
  &:hover {
    cursor: pointer;
  }
`;

const BottomBar = function ({productid}) {
  const [isClicked, setIsClicked] = React.useState(false);
  const clickHandler = (event) => {
    event.preventDefault();
    setIsClicked(true);
  }
  return (
    <div>
      <Btn type="button" onClick={(event) => { clickHandler(event); }}>Add A Question +</Btn>
      {isClicked && <QuestionForm productid={productid} setIsClicked={setIsClicked} />}
    </div>
  );
};
export default BottomBar;
