import React,{useState, useEffect} from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import QuestionList from './QuestionList';
import BottomBar from './BottomBar';

const QnAWidget = function (props) {
  const [QList, setQlist] = useState([{}]);
  useEffect(() => {
    axios.get('/api/qa/questions/40343')
      .then((data) =>{
        console.log('data.data.results: ', data.data.results);
        setQlist(data.data.results);
      })
      .catch((err) => {
        console.log('error in qna axios call: ', err);
      })
  }, []);
  return (
    <div>
      <TopBar />
      <QuestionList list={QList} />
      <BottomBar />
    </div>
  );
};

export default QnAWidget;
