import React from 'react';
import AnswerList from './AnswerList';

const Question = function (props) {
  const [helpfull, setHelpfull] = React.useState(false);
  const [reported, setReported] = React.useState(false);
  const helphandler = (event) => {
    event.preventDefault();
    if (!helpfull) {
      setHelpfull(!helpfull);
      //when put request works put here
    }
  }
  const reporthandler = (event) => {
    event.preventDefault();
    if (!reported) {
      setReported(!reported);
      // when put request works put here
    }
  }
  React.useEffect(() => {
  }, [helpfull, reported]);
  return (
    <div>
      <div>
        Q:
        {props.question.question_body}
      <button type="button" onClick={(e) => { helphandler(e)}}>helpfull
      {helpfull ? props.question.question_helpfulness + 1 : props.question.question_helpfulness }</button>
      <button type="button" onClick={(e) => { reporthandler(e)}}>{reported ? 'reported' : 'report'}</button>
        </div>
      <div> by {props.question.asker_name} at {props.question.question_date}</div>
      <AnswerList aList={props.question.answers}/>
    </div>
  );
};
export default Question;
