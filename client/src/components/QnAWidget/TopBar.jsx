import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 85%;
  height: 30px;
`;

const Search = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const TopBar = function(props) {
  const [form, setForm] = React.useState('');
  const submithandler = (event) => {
    event.preventDefault();
    props.setSearch(form);
    setForm('');
  };

  return (
   <Wrapper>
    <h3>Questions and Answers</h3>
    <form onSubmit={submithandler}>
        <Input type='text' id='search'onChange={(e) => (setForm(e.target.value))} value={form}></Input>
        <Search  type='submit' value='🔍'/>
    </form>
   </Wrapper>
  );
 };
 export default TopBar;