import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Abox = styled.div`
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
  padding-left: 30px;
`;
const ReportLink = styled.a`
  padding-left: 30px;
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
    <div>

      <div>
        <Firstline>
        <Abox>A:</Abox>
          {answer.body}
          <HelpfulQ>Helpful?</HelpfulQ>
          <a href="#" onClick={(e) => { helphandler(e)}}>Yes ({ helpfull ? answer.helpfulness + 1 : answer.helpfulness})</a>
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
