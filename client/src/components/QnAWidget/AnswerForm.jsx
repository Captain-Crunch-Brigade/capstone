import React from 'react';
import axios from 'axios';

const initState = {
  body: '',
  name: '',
  email: '',
  Photos: '',
}

const AnswerForm = function ({id, setIsClicked}) {
  const [form, setForm] = React.useState(initState);
  const submithandler = (event) => {
    event.preventDefault();
    setForm(initState);
  }

  return (
    <div>
      <h4>Submit your Answer </h4>
      <h5>About the product</h5>
      <form onSubmit={submithandler}>
        <textarea type="text" id="body" onChange={(e) => (setForm({...form, body: e.target.value}))} value={form.body} placeholder="Why did you like the product or not" />
        <div></div>
        <label>NickName:</label>
        <input type="text" id="name" onChange={(e) => (setForm({...form, name: e.target.value}))} value={form.name} placeholder="Example: jack543!"/>
        <div>For privacy reasons, do not use your full name or email address</div>
        <label>Email:</label>
        <input type="text" id="email" onChange={(e) => (setForm({...form, email: e.target.value}))} value={form.email} placeholder="Example: jack@email.com"/>
      </form>
    </div>
  );
};
export default AnswerForm;
