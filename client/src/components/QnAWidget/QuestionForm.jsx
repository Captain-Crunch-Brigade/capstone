  import React from 'react';
  import axios from 'axios';

const initState = {
  body: '',
  name: '',
  email: '',
  product_id: 0,
}
const QuestionForm = function ({productid, setIsClicked}) {
  const [form, setForm] = React.useState(initState);
  const submithandler = (event) => {
    event.preventDefault();
    axios.post(`/api/qa/questions/`, form)
      .then((data) =>{
        setIsClicked(false);
      })
      .catch((err) => {
        console.log('error in qna axios call: ', err);
      })

  }

  React.useEffect( ()=> {
    setForm({...form, product_id: productid});
  }, [])
  return(
    <div>
      <h4>Ask Your Question</h4>
      <h5>About the product</h5>
      <form onSubmit={submithandler}>
        <textarea type="text" id="body" onChange={(e) => (setForm({...form, body: e.target.value}))} value={form.body} placeholder="Why did you like the product or not" />
        <div></div>
        <label>NickName:</label>
        <input type="text" id="name" onChange={(e) => (setForm({...form, name: e.target.value}))} value={form.name} placeholder="Example: jackson11!"/>
        <div>For privacy reasons, do not use your full name or email address</div>
        <label>Email:</label>
        <input type="text" id="email" onChange={(e) => (setForm({...form, email: e.target.value}))} value={form.email} />
        <input type="submit" value="Submit Question" />
      </form>
    </div>
  )
};
export default QuestionForm;
