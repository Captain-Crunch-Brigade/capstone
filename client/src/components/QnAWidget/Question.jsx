import React from 'react';
import AnswerList from './AnswerList';

const Question = function (props) {
  return (
    <div>
      <div>Q:
        {props.question.question_body}</div>
      <div> by {props.question.asker_name} at {props.question.question_date}</div>
      <AnswerList aList={props.question.answers}/>
      <button type="button">helpfull</button>
      <button type="button">report</button>
    </div>
  );
};
export default Question;
