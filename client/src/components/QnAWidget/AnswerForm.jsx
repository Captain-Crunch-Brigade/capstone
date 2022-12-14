import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color; rgba(0, 0, 0, 0.50);
  z-index: 500;
`;
const ModalWrapper = styled.div`
  width: 425px;
  height: 275px;
  position: fixed;
  max-height: 80%;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
  border: 1px solid #eee;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
const Subtitle = styled.div`
  display: block;
  margin-block-end: 0px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 7px;
  padding-left: 20px;
`;
const Header = styled.div`
  display: block;
  margin-block-end: 0px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
`;
const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
`
const initState = {
  body: '',
  name: '',
  email: '',
  Photos: []
}

const AnswerForm = function ({id, setIsClicked}) {
  const [form, setForm] = React.useState(initState);
  const submithandler = (event) => {
    event.preventDefault();
    axios.post(`/api/qa/answers/${id}`, form)
      .then((data) =>{
        setIsClicked(false);
      })
      .catch((err) => {
        setIsClicked(false);
        console.error(err.message);
      })

  }

  return (
    <div>
      <ModalWrapper>
        <Header>
          <div>Submit your Answer </div>
        </Header>
        <Subtitle>
          About the product
        </Subtitle>
        <form onSubmit={submithandler}>
          <TextArea type="text" id="body" onChange={(e) => (setForm({...form, body: e.target.value}))} value={form.body} placeholder="Why did you like the product or not" />
          <div></div>
          <label>NickName:</label>
          <input type="text" id="name" onChange={(e) => (setForm({...form, name: e.target.value}))} value={form.name} placeholder="Example: jack543!"/>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label>Email:</label>
          <input type="text" id="email" onChange={(e) => (setForm({...form, email: e.target.value}))} value={form.email} placeholder="Example: jack@email.com"/>
          <input type="submit" value="Submit Answer" />
        </form>
      </ModalWrapper>
      <Background onClick={() => {setIsClicked(false)}}/>
    </div>
  );
};
export default AnswerForm;
