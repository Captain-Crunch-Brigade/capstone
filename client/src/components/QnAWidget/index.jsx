import React,{useState, useEffect} from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import QuestionList from './QuestionList';
import BottomBar from './BottomBar';

const QnAWidget = function ({id}) {
  const [QList, setQlist] = useState([{}]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('/api/qa/questions/40343')
      .then((data) =>{
        setQlist(data.data.results);
      })
      .catch((err) => {
        console.log('error in qna axios call: ', err);
      })
  }, []);
  useEffect(() => {

  }, [search]);
  return (
    <div>
      <TopBar setSearch={setSearch}/>
      <QuestionList list={QList} search={search}/>
      <BottomBar productid={40343}/>
    </div>
  );
};

export default QnAWidget;
