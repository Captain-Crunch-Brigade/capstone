import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Abox = styled.div`
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
const AnswerPad = styled.div`
  padding-right: 15px;
  height: 18px;
`;

const Answer = function ({ answer }) {
  const [helpfull, setHelpfull] = React.useState(false);
  const [reported, setReported] = React.useState(false);
  const helphandler = (e) => {
    e.preventDefault();
    if (!helpfull) {
      setHelpfull(!helpfull);
      axios.put('/api/qa/answers/helpful', { id: answer.id })
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
      axios.put('/api/qa/answers/report', { id: answer.id })
        .then((results) => {
        })
        .catch((err) => {
          console.log('error in helpHandler axios call: ', err);
        });
    }
  }

  return (
    <div  data-testid='answer'>
      <div>
        <Firstline>
          <Abox><h5 style={{ margin: 0 }}>A:</h5></Abox>
          <AnswerPad>
            {answer.body}
          </AnswerPad>
          <HelpfulQ>Helpful?</HelpfulQ>
          <HelpLink href="#" onClick={(e) => { helphandler(e)}}>Yes ({ helpfull ? answer.helpfulness + 1 : answer.helpfulness})</HelpLink>
          <ReportLink href="#" onClick={(e) => { reporthandler(e)}}>{reported ? 'reported' : 'report'}</ReportLink>
        </Firstline>
      </div>
      <Secondline>
      <div>by {answer.answerer_name} at {answer.date}</div>
      </Secondline>
    </div>
  );
};

export default Answer;
