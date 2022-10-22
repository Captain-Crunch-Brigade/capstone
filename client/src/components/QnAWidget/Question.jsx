import React from 'react';
import axios from 'axios';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm'

const Question = function ({question}) {
  const [helpfull, setHelpfull] = React.useState(false);
  const [reported, setReported] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const clickHandler = () => {
    setIsClicked(true);
  }
  const helphandler = () => {
    if (!helpfull) {
      setHelpfull(!helpfull);
      axios.put('/api/qa/questions/helpful', { id: question.question_id })
        .then((results) => {
        })
        .catch((err) => {
          console.log('error in helpHandler axios call: ', err);
        });
    }
  }
  const reporthandler = () => {
    if (!reported) {
      setReported(!reported);
      axios.put('/api/qa/questions/report', { id: question.question_id })
        .then((results) => {
        })
        .catch((err) => {
          console.log('error in helpHandler axios call: ', err);
        });
    }
  }
  React.useEffect(() => {
  }, [helpfull, reported]);
  return (
    <div>
      <div>
        Q:
        {question.question_body}
        <button type="button" onClick={(e) => { helphandler(e)}}>
          helpfull
          {helpfull ? question.question_helpfulness + 1 : question.question_helpfulness }
        </button>
        <button type="button" onClick={(e) => { reporthandler(e)}}>{reported ? 'reported' : 'report'}</button>
        </div>
      <div> by {question.asker_name} at {question.question_date}</div>
      <AnswerList aList={question.answers}/>
      <button type="button" onClick={(event) => { clickHandler(event); }}>add Answer</button>
      {isClicked && <AnswerForm id={question.question_id} setIsClicked={setIsClicked} />}
    </div>
  );
};
export default Question;
