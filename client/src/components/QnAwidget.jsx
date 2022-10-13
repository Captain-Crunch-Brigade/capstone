import React from 'react';
import axios from 'axios';
const QnAWidget = function(props) {
  const [QList, setQlist] = React.useState([])
  //axios call here


  return(
    <div>
      <TopBar/>
      <QuestionList list={Qlist}/>
      <BottomBar/>
    </div>
  )
}

const TopBar = function(props){

 return (
  <div>
    searchbar here

  </div>
 )
}
const QuestionList = function(props) {
  const [renderList, setRenderList] = React.useState([]);
  React.useEffect(()=>{
    //test props.list for length if > 2 setstate to just the first 2 items
  }, [])
  return(
    <div>
      {renderList.map((item) =>(
        <Question question={item}/>
      ))}

      <button>if more questiosn button</button>
    </div>
  )
}
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
const AnswerList = function(props){
  const [answerList, setAnswerList] = React.useState([]);
  React.useEffect(()=>{
    //test props.alist for length if > 2 setstate to just the first 2 items
  }, [])
  return(
    <div>
      {answerList.map((item) =>(
        <Answer answer={item}/>
      ))}
      <button>if more answers button</button>
    </div>
  )
}

const Answer = function(prop) {

  return(
    <div>
      <div>A: answer here</div>
      <div>by NickName at Date</div>
      <button>helpfull</button>
      <button>report</button>
    </div>
  )
}
const BottomBar = function(props){
  return(
    <div>
      <button>add question</button>
    </div>
  )
}
export default QnAWidget;