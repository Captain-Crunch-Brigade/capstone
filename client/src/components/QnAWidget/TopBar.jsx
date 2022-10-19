import React from 'react';
const TopBar = function(props) {
  const [form, setForm] = React.useState('');
  const submithandler = (event) => {
    event.preventDefault();
    props.setSearch(form);
    setForm('');
  }

  return (
   <div>
    <h4>Questions and Answers</h4>
    <form onSubmit={submithandler}>
        <input type='text' id='search'onChange={(e) => (setForm(e.target.value))} value={form}></input>
        <input  type='submit' value='Search'/>
    </form>
   </div>
  );
 };
 export default TopBar;