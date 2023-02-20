import React, { Fragment, useState } from "react";
import Add from "../Add/Add";
import CardList from "../CardList/CardList";
import Filter from "../Filter/Filter";
import Modal from "../Modal/Modal";
import './App.css';
const App = () => {
  const [showToggle, setShowToggle] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [names, setNames] = useState([
    {
      id: 1,
      name: "Ahmed",
      age: 20,
      phone: "01206360558",
      type: "boy"
    },
    {
      id: 2,
      name: "Sara",
      age: 20,
      phone: "01206360558",
      type: "girl"
    },
    {
      id: 3,
      name: "osama",
      age: 20,
      phone: "01206360558",
      type: "boy"
    },
    {
      id: 4,
      name: "Neno",
      age: 20,
      phone: "01206360558",
      type: "girl"
    }
  ]);
  const add = (data) => {
    setNames([...names, {
      id: names.length + 1,
      name: data.Name,
      age: data.Age,
      phone: data.Phone,
      type: data.Type
    }
    ]
    );
  }

  const deleteHandler = (e, id) => {
    setNames(names.filter((el) => el.id !== id))
  }
  const filterNames = (name) => {
    setFilter(name);
  }
  const namesHandler = () => {
    if (filter.length !== 0) {
      return names.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    }
    return names;
  }
  return (
    <Fragment>
    <div className="mainContainer">
      <h1>List Of Data</h1>
      <Filter filteration={filterNames} />
      <div className="btns">
      <button className="btn" onClick={() => setShowToggle(!showToggle)}>{showToggle ? "Hide Names" : "Show Names"}</button>
      <button className="btn" onClick={() => setShowModal(!showModal)}>New Record</button>
      </div>
      <div className={showToggle ? "show" : "hide"}>
        <CardList nameList={namesHandler()} deleteFunc={deleteHandler} />
      </div>
      </div>
      <Modal show={showModal} close={() => setShowModal(!showModal)}>
        <Add add={add} close={() => setShowModal(!showModal)}/>
      </Modal> 
    </Fragment>
  )
}
export default App;