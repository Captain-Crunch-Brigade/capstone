  import React from 'react';

const initState = {
  body: '',
  name: '',
  email: '',
}
const QuestionForm = function ({productid, setIsClicked}) {
  const [form, setForm] = React.useState(initState);
  const submithandler = (event) => {
    event.preventDefault();
    props.postWord(form);
    setForm(initstate);
  }

  return(
    <div>
      <h3>Ask Your Question</h3>
      <h4>About the product</h4>
      <form onSubmit={submithandler}>
        <textarea type="text" id="body" onChange={(e) => (setForm({...form, body: e.target.value}))} value={form.body} placeholder="Why did you like the product or not" />
        <div></div>
        <label>NickName:</label>
        <input type="text" id="name" onChange={(e) => (setForm({...form, name: e.target.value}))} value={form.name} placeholder="Example: jackson11!"/>
        <div>For privacy reasons, do not use your full name or email address</div>
        <label>Email:</label>
        <input type="text" id="email" onChange={(e) => (setForm({...form, email: e.target.value}))} value={form.email} />
      </form>
    </div>
  )
};
export default QuestionForm;
