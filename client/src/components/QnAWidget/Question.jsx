import React from 'react';
import AnswerList from './AnswerList';

const Question = function ({props}) {
  return (
    <div>
      <div>Q: Question here</div>
      <div> by NickName at Date</div>
      <AnswerList aList={props.question.answers}/>
      <button type="button">helpfull</button>
      <button type="button">report</button>
    </div>
  );
};
export default Question;
