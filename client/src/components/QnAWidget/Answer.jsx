import React from 'react';

const Answer = function ({ answer }) {
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

  return (
    <div>
      <div>
        A:
        {answer.body}
      </div>
      <div>by {answer.answerer_name} at {answer.date}</div>
      <button type="button" onClick={(e) => { helphandler(e)}}>helpfull { helpfull ? answer.helpfulness + 1 : answer.helpfulness}</button>
      <button type="button" onClick={(e) => { reporthandler(e)}}>{reported ? 'reported' : 'report'}</button>
    </div>
  );
};

export default Answer;
