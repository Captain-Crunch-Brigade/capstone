import React from 'react';
import QuestionForm from './QuestionForm';

const BottomBar = function ({productid}) {
  const [isClicked, setIsClicked] = React.useState(false);
  const clickHandler = (event) => {
    event.preventDefault();
    setIsClicked(true);
  }
  return (
    <div>
      <button type="button" onClick={(event) => { clickHandler(event); }}>add question</button>
      {isClicked && <QuestionForm productid={productid} setIsClicked={setIsClicked} />}
    </div>
  );
};
export default BottomBar;
