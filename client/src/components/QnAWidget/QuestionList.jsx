import React from 'react';
import Question from '.Question.jsx'
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
export default QuestionList;