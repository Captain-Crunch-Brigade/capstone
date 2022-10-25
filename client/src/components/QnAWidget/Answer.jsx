import React from 'react';
import axios from 'axios';

const Answer = function ({ answer }) {
  const [helpfull, setHelpfull] = React.useState(false);
  const [reported, setReported] = React.useState(false);
  const helphandler = () => {
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
  const reporthandler = () => {
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
        A:
        {answer.body}
        <button type="button" onClick={(e) => { helphandler()}}>helpfull { helpfull ? answer.helpfulness + 1 : answer.helpfulness}</button>
        <button type="button" onClick={(e) => { reporthandler()}}>{reported ? 'reported' : 'report'}</button>
      </div>
      <div>by {answer.answerer_name} at {answer.date}</div>

    </div>
  );
};

export default Answer;
