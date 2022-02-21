// import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AddDetModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalBody'>
        <Form>
          <Form.Group className="mb-3" controlId="task">
            <Form.Label>Enter Task Title</Form.Label>
            <Form.Control type="text" placeholder="Task Title" onChange={props.itemList}></Form.Control>
            {/* <input type="text" placeholder="Task Title" onChange={props.itemList}/> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="details">
            <Form.Label>Enter Task Details</Form.Label>
            <Form.Control type="text" placeholder="Task Details" onChange={props.itemText}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Assigned By</Form.Label>
            <Form.Control type="text" placeholder="Task Author" onChange={props.itemAuthor}></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="addBtn" variant="dark" text="white" onClick={props.addItems}>Add</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const CustomDiv = (props) => {
  return (
    <div className={props.name}>
      <div className="heading">{props.name}</div>
      {props.list.length > 0 && props.list.map((itemsVal, index) => {
        return <ToDoList key={index} id={index} sectionName={props.name} text={itemsVal} SId={props.secID} onSelect={props.deleteItems} onNext={props.backItems} />
      })
      }
    </div>
  );
};
const Main = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");

  const [section, setSection] = useState([{ name: "Assigned", list: [] }, { name: "Progress", list: [] }, { name: "Blocked", list: [] }, { name: "Testing", list: [] }, { name: "Complete", list: [] }]);
  const [modalShow, setModalShow] = useState(false);

  const itemList = (event) => {
    setInputTitle(event.target.value);
    // targetText += event.target.value;
    // targetText += "\n";
    // console.log(targetText);
  };
  const itemText = (event) => {
    setInputText(event.target.value)
  };

  const itemAuthor = (event) => {
    setInputAuthor(event.target.value);
  }

  const addItems = () => {
    // targetText = inputTitle + "\n" + inputText + "\n" +inputAuthor;
    const item = {title: inputTitle, detail: inputText, author: inputAuthor};
    // count++;
    // console.log(targetText);
    const newSection = section.map((Obj) => {
      if (Obj.name === "Assigned") {
        return { name: "Assigned", list: [...Obj.list, item] };
      }
      return Obj;
    })
    setSection(newSection);
    localStorage.setItem('ticket',JSON.stringify(section));
    // document.getElementById("inputText").value = "";
  };

  const updateSection = (ele, sNum) => {
    const secName = section[sNum + 1].name;
    const upSection = section.map((Obj) => {
      if (Obj.name === secName) { return { name: secName, list: [...Obj.list, ele] }; }
      return Obj;
    })
    setSection(upSection);
  }

  const filterList = (arr, ele, sNum) => {
    return arr.filter((arrElem) => {
      if (arrElem === ele) {
        return updateSection(ele, sNum);
      }
      return arrElem !== ele;
    })
  };

  const deleteItems = (id, secNum) => {
    const xyz = section[secNum].name; //Assigned
    const abc = section[secNum].list[id]; //Model 1
    return section.filter((sName, index) => {
      if (sName.name === xyz) {
        sName.list = filterList(sName.list, abc, secNum);
        return sName.list;
      }
      return sName.list;
    });
  };

  const testSection = (ele, scNum) => {
    const scName = section[scNum].name;
    const newSection = section.map((Obj) => {
      if (Obj.name === scName) {
        return { name: scName, list: [...Obj.list, ele] };
      }
      return Obj;
    })
    setSection(newSection);
  }
  const backList = (arr, itemText, scName) => {
    return arr.filter((arrElem) => {
      if (arrElem === itemText) {
        if (scName === "Progress") {
          return testSection(itemText, 3);
        }
        else {
          return testSection(itemText, 1);
        }
      }
      return arrElem !== itemText;
    });
  };

  const backItems = (id, secNum) => {
    const scName = section[secNum].name;
    const itemText = section[secNum].list[id];

    return section.filter((sName, index) => {
      if (sName.name === scName) {
        sName.list = backList(sName.list, itemText, scName);
        return sName.list;
      }
      return sName.list;
    });
  };

  return (
    // <div>Hello</div>
    <div className="App" >
      <br /><h1>Employee Work System</h1>
      <div className='logout'>
        <strong>Click to Logout: </strong>
        <Link className="B2Intro" to="/">Logout</Link>
      </div>
      <br />
      <strong>Click to Add Task:  </strong>
      <Button className="addBtn" variant="dark" text="white" size="sm" onClick={() => setModalShow(true)}>Add Task</Button>
      <AddDetModal show={modalShow} onHide={() => setModalShow(false)} itemList={itemList} addItems={addItems} 
      itemText={itemText} itemAuthor={itemAuthor}/>

      {/* <div className="search">
          <br /><strong>Add Task: </strong><input type="text" onChange={itemList} id="inputText"/>   
          <Button className="addBtn" variant="dark" text="white" size="sm" onClick={addItems}>Add</Button>
      </div> */}
      {
        section.map((Obj, index) => {
          return <CustomDiv name={Obj.name} list={Obj.list} secID={index} deleteItems={deleteItems} backItems={backItems} />
        })
      }
    </div>
  );
}

export default Main;
