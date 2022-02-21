import React, { useState } from 'react';
// import { Card } from 'react-bootstrap';
import { Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoModal = (props) => {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.info.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.info.detail}<br />
                <br /><strong>Assigned By: </strong>{props.info.author}
            </Modal.Body>
            <Modal.Footer>
                {/* <Button className="addBtn" variant="dark" text="white" onClick={props.addItems}>Add</Button> */}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

const ToDoList = (props) => {
    const [modalShow, setModalShow] = useState(false);
    // let str = props.text;
    // const strText = str.split(/\r?\n/);
    console.log(props.text);
    // const titleDet = strText[0];
    // const textDet = strText[1];
    // const authorDet = strText[2];
    if (props.SId === 0) {  //Assigned
        return (
            <Card bg="light" border="dark" style={{ width: '100%', fontSize: 13 }}>
                <Card.Body >
                    <Card.Text>
                        <strong>{props.text.title}</strong><br />
                        {props.text.detail}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {/* {props.text} */}
                    Assigned By:
                    <Button variant="secondary" size="sm" className="btn1" onClick={() => {
                        props.onSelect(props.id, props.SId);
                    }}>Next</Button><br />
                    {props.text.author}
                </Card.Footer>
            </Card>
        );
    }

    if (props.SId === 1) {
        return (
            <Card bg="primary" text="white" border="dark" style={{ width: '100%', fontSize: 13 }}>
                <Card.Body >
                <Card.Text>
                        <strong>{props.text.title}</strong><br />
                        {props.text.detail}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Assigned By:
                    <Button variant="light" size="sm" className="btn1" onClick={() => {
                        props.onSelect(props.id, props.SId);
                    }}>Block</Button>
                    <Button variant="light" size="sm" className="btn3" onClick={() => {
                        props.onNext(props.id, props.SId);
                    }}>Test</Button><br />
                    {props.text.author}
                </Card.Footer>
            </Card>
        );
    }
    if (props.SId === 2) {
        return (
            <Card bg="secondary" text="white" border="dark" style={{ width: '100%', fontSize: 13 }}>
                <Card.Body >
                <Card.Text>
                        <strong>{props.text.title}</strong><br />
                        {props.text.detail}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Assigned By:
                    <Button variant="light" size="sm" className="btn4" onClick={() => {
                        props.onNext(props.id, props.SId);
                    }}>Back</Button><br />
                    {props.text.author}
                </Card.Footer>
            </Card>
        );
    }
    if (props.SId === 3) {
        return (
            <Card bg="warning" border="dark" style={{ width: '100%', fontSize: 13 }}>
                <Card.Body >
                <Card.Text>
                        <strong>{props.text.title}</strong><br />
                        {props.text.detail}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Assigned By:
                    <Button variant="light" size="sm" className="btn3" onClick={() => {
                        props.onNext(props.id, props.SId);
                    }}>Back</Button>
                    <Button variant="light" size="sm" className="btn1" onClick={() => {
                        props.onSelect(props.id, props.SId);
                    }}>Done</Button><br />
                    {props.text.author}
                </Card.Footer>
            </Card>
        );
    }
    if (props.SId === 4) {
        return (
            <Card bg="success" text="white" border="dark" style={{ width: '100%', fontSize: 13 }}>
                <Card.Body >
                    <Card.Text>
                        <strong>{props.text.title}</strong>
                        <Button variant="light" size="sm" className="btn1" onClick={() => setModalShow(true)}>Details</Button>
                        {/* <Button className="addBtn" variant="dark" text="white" size="sm" onClick={() => setModalShow(true)}>Details</Button> */}
                        <InfoModal show={modalShow} onHide={() => setModalShow(false)} info={props.text} />
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ToDoList;

// how to optimise react, stop rerendring