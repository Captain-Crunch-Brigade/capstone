import React from 'react';

const Answer = function ({ answer }) {
  return (
    <div>
      <div>
        A:
        {answer.body}
      </div>
      <div>by {answer.answerer_name} at {answer.date}</div>
      <button type="button">helpfull</button>
      <button type="button">report</button>
    </div>
  );
};

export default Answer;
