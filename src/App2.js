// import React, { Component } from "react";
// import "./App.css";
// import Child from "./Child";
// class App extends Component{
//   render() {
//     // const info = { name: "ahmed", age: 20 };
//     // const arr = ["red","blue","green"];
//     return(
//       <div>
//         <h1 className="head">hello MF</h1>
//         {/* <Child PersonalInfo={info} colors={arr} /> */}
//         <Child name={"Ahmed"} />
//       </div>
//     )
//   }
// }
// export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//       show:true,
//       color:"red",
//     }
//   }
//   // changeCounter = () => {
//   //   this.setState({ counter: 12})
//   // }
//   changeCounter(num){
//     this.setState({counter: num})
//   }
//   changeShow = () => {
//     this.setState({show:false})
//   }
//   changeColor=(event)=>{
//     this.setState({color:event.target.value})
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello</h1>
//           <from>
//             <div> Your color is {this.state.color}</div>
//             <input 
//             type="text"
//             onChange={this.changeColor}
//             />
//             <br/>
//           The counter is : {this.state.counter}
//           <button onClick={() => this.changeCounter(10)}> Change Counter</button>
//           {this.state.show ? <div>ON</div> : <div>OFF</div>}
//           <button onClick={this.changeShow}> no</button>
//           </from>
//       </div>
//     )
//   }
// }
import { useState } from "react";
import styled from "styled-components";
import "./index.css";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;
const Text = styled.input`
  width: 75%;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
  outline: none;
`;
const TaskCount = styled.span`
  margin: 10px;
`;
const Tasks = styled.div`
`;
const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through";
`;
const App = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("");
  };
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
      item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };
return (
    <Container>
      <div>
          <h2>Todo List</h2>
          <Text value={input} onInput={(e) =>setInput(e.target.value)} />
          <Button onClick={() => handleClick()}>Add</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b> {completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete = {todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                  }}
                >
                  {todo.task}
                </LIST>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default App;