import React from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import QuestionList from './QuestionList';
import BottomBar from './BottomBar';

const QnAWidget = function (props) {
  const [QList, setQlist] = React.useState([]);
  //  axios call here

  return (
    <div>
      <TopBar />
      <QuestionList list={QList} />
      <BottomBar />
    </div>
  );
};

export default QnAWidget;
