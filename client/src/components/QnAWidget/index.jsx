import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TopBar from './TopBar';
import QuestionList from './QuestionList';
import BottomBar from './BottomBar';

const QnAWidget = function () {
  const { id } = useParams();
  const [QList, setQlist] = useState([{}]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get(`/api/qa/questions/${id}`)
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
    <div data-testid='QnAWidget'>
      <TopBar setSearch={setSearch}/>
      <QuestionList list={QList} search={search}/>
      <BottomBar productid={id}/>
    </div>
  );
};

export default QnAWidget;
