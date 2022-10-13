import React from 'react';
import axios from 'axios';
import TopBar from './TopBar.jsx';
import QuestionList from './QuestionList.jsx';
import BottomBar from './BottomBar';
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

export default QnAWidget;