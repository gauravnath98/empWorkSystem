import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
import ToDoList from './ToDoList';

const CustomDiv = (props) => {
  return(
    <div className={props.name}>
        <div className="heading">{props.name}</div>
        <ol>
          { props.list.length > 0 && props.list.map( (itemsVal, index) => {
              return <ToDoList key={index} id={index} sectionName={props.name} text={itemsVal} SId = {props.secID} onSelect={props.deleteItems} onNext={props.backItems}/>
            })
          }
        </ol>
      </div>
  );
};
function App() {
  const [inputList, setInputList] = useState("");
  const [section, setSection] = useState([{name: "Assigned", list:[]}, {name: "Progress", list:[]}, {name: "Blocked",list:[]}, {name: "Testing", list:[]}, {name: "Complete", list:[]}]);
  
  const itemList = (event) => {
    setInputList(event.target.value);
  };
  
  const addItems = () => {
    const newSection = section.map((Obj) =>{
      if(Obj.name === "Assigned"){
        return {name:"Assigned", list:[...Obj.list, inputList]};
      }
      return Obj;
    })
    setSection(newSection);
    document.getElementById("inputText").value = "";
  };

  const updateSection = (ele, sNum) => {
    const secName = section[sNum+1].name;
    const upSection = section.map((Obj) => {
      if(Obj.name === secName)
      {return {name: secName, list:[...Obj.list, ele]};}
      return Obj;
    })
    setSection(upSection);
  }

  const filterList = (arr, ele, sNum) => {
    return arr.filter((arrElem) => {
      if(arrElem === ele){
        return updateSection(ele, sNum);
      }
      return arrElem !== ele;
    })
  };
  
  const deleteItems = (id, secNum) => {
    const xyz = section[secNum].name;
    const abc = section[secNum].list[id];
    return section.filter((sName, index) => {
      if(sName.name === xyz){
        sName.list = filterList(sName.list, abc, secNum);
        return sName.list;
      }
      return sName.list;
    });
  };
  
  const testSection = (ele, scNum) => {
    const scName = section[scNum].name;
    const newSection = section.map((Obj) =>{
      if(Obj.name === scName){
        return {name:scName, list:[...Obj.list, ele]};
      }
      return Obj;
    })
    setSection(newSection);
  }
  const backList = (arr, itemText, scName) => {
    return arr.filter((arrElem) => {
      if(arrElem === itemText){
        if(scName === "Progress"){
          return testSection(itemText, 3);
        }
        else{
          return testSection(itemText, 1);
        }
      }
      return arrElem !== itemText;
    });
  };

  const backItems = (id, secNum) => {
    const scName = section[secNum].name;
    const itemText = section[secNum].list[id];

    return section.filter((sName,index) => {
      if(sName.name === scName){
        sName.list = backList(sName.list, itemText, scName);
        return sName.list;
      }
      return sName.list;
    });
  };
  return (
      <div className="App" >
        <h1>Employee Work System</h1>
      <div className="search">
          Add Task: <input type="text" onChange={itemList} id="inputText"/>
          <button onClick={addItems}>Add</button>
      </div>
      {
        section.map((Obj, index) =>{
          return <CustomDiv name={Obj.name} list={Obj.list} secID={index} deleteItems={deleteItems} backItems = {backItems}/>
        })
      }
    </div>
  );
}

export default App;
