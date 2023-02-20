import React, { useState } from "react";
import Form from "../Layout/Form";

const Add = ({ add , close}) => {
  const [input, setInput] = useState();

  const inputHandler = () => {
    setInput({
      Name: document.getElementById("Name").value,
      Age: document.getElementById("Age").value,
      Phone: document.getElementById("Phone").value,
      Type: document.getElementById("type").value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    add(input)
    close()
    document.getElementById("Name").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("type").value = "";
  }
  return (
    <form onSubmit={submitHandler}>
      <Form.Controller>
        <label htmlFor='Name'>Name</label>
        <input id="Name" type='text' />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor='Age'>Age</label>
        <input id="Age" type='text' />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor='Phone'>Phone</label>
        <input id="Phone" type='text' />
      </Form.Controller>
      <Form.Controller>
      <label htmlFor='type'>Gender</label>
      <select name="type" id="type">
      <option value={"boy"}>Man</option>
      <option value={"girl"}>Woman</option>
      </select>
      </Form.Controller>
      <Form.Controller>
        <button style={{ margin: 'auto', padding: '10PX 40px', fontSize:'17px' }} className="btn" onClick={inputHandler}>Save</button>
      </Form.Controller>

    </form>
  );
}
export default Add;
      