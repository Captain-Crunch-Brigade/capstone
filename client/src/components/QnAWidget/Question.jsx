import React from 'react';
import AnswerList from './AnswerList.jsx';
const Question = function(props) {


  return(
    <div>
      <div>Q: Question here</div>
      <div> by NickName at Date</div>
      <AnswerList aList={props.question.answers}/>
      <button>helpfull</button>
      <button>report</button>
    </div>
  )
}
export default Question;