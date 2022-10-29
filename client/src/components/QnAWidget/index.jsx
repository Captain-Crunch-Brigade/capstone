import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TopBar from './TopBar';
import QuestionList from './QuestionList';
import BottomBar from './BottomBar';

const Wrapper = styled.div`
  margin-left: 11%;
`;

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
        console.error(err.message);
      })
  }, []);
  useEffect(() => {

  }, [search]);
  return (
    <Wrapper data-testid="QnAWidget">
      <TopBar setSearch={setSearch} />
      <QuestionList list={QList} search={search} />
      <BottomBar productid={id} />
    </Wrapper>
  );
};

export default QnAWidget;
