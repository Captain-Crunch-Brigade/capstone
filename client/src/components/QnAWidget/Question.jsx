import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm'

const Qbox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 20px;
`;
const Firstline = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const Secondline = styled.div`
  padding-left: 20px;
`;
const HelpfulQ = styled.div`
  border-left: 1px solid black;
  padding-left: 15px;
`;
const ReportLink = styled.a`
  padding-left: 15px;
`;
const HelpLink = styled.a`
  border-right: 1px solid black;
  padding-right: 15px;
`;
const QuestionPad = styled.div`
  padding-right: 15px;
`;

const Question = function ({question}) {
  const [helpfull, setHelpfull] = React.useState(false);
  const [reported, setReported] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const clickHandler = () => {
    setIsClicked(true);
  }
  const helphandler = (e) => {
    e.preventDefault();
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
  const reporthandler = (e) => {
    e.preventDefault();
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
        <Firstline>
          <Qbox>Q:</Qbox>
          <QuestionPad>
            {question.question_body}
          </QuestionPad>
          <HelpfulQ>Helpful?</HelpfulQ>
          <HelpLink href="#" onClick={(e) => { helphandler(e)}}>
            Yes
            ({helpfull ? question.question_helpfulness + 1 : question.question_helpfulness })
          </HelpLink>
          <ReportLink href="#" onClick={(e) => { reporthandler(e)}}>{reported ? 'reported' : 'report'}</ReportLink>
        </Firstline>
        </div>
      <Secondline>
        <div> by {question.asker_name} at {question.question_date}</div>
        <button type="button" onClick={(event) => { clickHandler(event); }}>add Answer</button>
        <AnswerList aList={question.answers}/>
        {isClicked && <AnswerForm id={question.question_id} setIsClicked={setIsClicked} />}
      </Secondline>
    </div>
  );
};
export default Question;
