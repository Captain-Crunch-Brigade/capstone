import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm'

const Qbox = styled.div`
  width: 20px;
  height: 18px;
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
  margin-right: 10px;
`;
const ReportLink = styled.a`
  padding-left: 15px;
  height: 18px;
  color: black;
  text-decoration-color: black;
`;
const HelpLink = styled.a`
  border-right: 1px solid black;
  padding-right: 15px;
  color: black;
  text-decoration-color: black;
`;
const QuestionPad = styled.div`
  padding-right: 15px;
  height: 18px;
`;

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
      setHelpfull((previousState) => !previousState);
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
      setReported((previousState) => !previousState);
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
          <Qbox><h4 style={{ margin: 0 }}>Q:</h4></Qbox>
          <QuestionPad>
            <h4 style={{ margin: 0 }}>{question.question_body}</h4>
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
        <Btn type="button" onClick={(event) => { clickHandler(event); }}>add Answer</Btn>
        <AnswerList aList={question.answers}/>
        {isClicked && <AnswerForm id={question.question_id} setIsClicked={setIsClicked} />}
      </Secondline>
    </div>
  );
};
export default Question;
