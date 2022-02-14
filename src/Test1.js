import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';
import ToDoList from './ToDoList';
// import Xyz from './xyz';

function App() {
  // const [emps, setEmps] = useState([])
  // const divList = document.querySelector(".centerDiv");

  // const addRow = () => {
  //   let text = document.getElementById("myVal").value;
  //   if(text === ""){
  //     alert("Enter Some Info!");
  //   }
  //   else{
  //     let newEmp = { name: text}
  //     setEmps([...emps, newEmp])
  //   }
  // }

  // const updateRow = () => {
  //   const li = document.querySelector("li");
  //   li.classList.toggle("colorGreen");
  //   document.getElementById("compBtn").disabled = true;
  //   // let index = 0;
  //   // let newEmp = emps[index]
  //   // newEmp["name"] = "Modfied User";
  //   // emps[index] = newEmp;
  //   // setEmps([...emps])
  // }

  // const deleteRow = () => {
  //   //let name="Mano"
  //   //setEmps(emps.filter(emp => emp.name !== name))
  //   let copy_emp = [...emps]
  //   copy_emp.splice(0, 1)
  //   setEmps(copy_emp)
  // }

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  //let a = "amit";

  const itemList = (event) => {
    setInputList(event.target.value);
  };

  const addItems = () => {
    setItems((prevItems) => {
      return [...prevItems, inputList];
    });
    document.getElementById("inputText").value = "";
  };

  const deleteItems = (id) => {
    console.log("deleted"); 
    setItems((prevItems) => {
      return prevItems.filter((arrElem, index) => {
        return index !== id;
      })
    }); 
  };

  return (
      <div className="App" >
      <div className="centerDiv">
        <br />
        <input type="text" onChange={itemList} id="inputText"/>
        <button onClick={addItems}>Add</button>
        <h2>To Do List</h2>
        <div className="myList">
        <ol>
          {/* <li>{inputList}</li> */}
          { items.map( (itemsVal, index) => {
              return <ToDoList key={index} id={index} text={itemsVal} onSelect={deleteItems}/>
            })
          }
        </ol>
        </div>
        {/* <input type="text" id="myVal"></input>
        <button onClick={addRow}>Add</button>
        {emps.map((emp, index) =>
        (
          <div key={index} className="myList"><br />
            <li>{emp.name}
            <button onClick={updateRow} id="compBtn">Complete</button>
            <button onClick={deleteRow} id="closeBtn">Close</button>
            </li>
            
          </div>
        )
        )} */}
      </div>

      {/* <Xyz abc={a}/> */}


    </div>
  );
}

export default App;
