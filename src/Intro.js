import React, { useState} from 'react';
// import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import Main from './Main';

const Intro = () => {
    const [empItem, setEmpDetail] = useState("");

    const addEmp = (event) => {
        setEmpDetail(event.target.value);
    }
    localStorage.setItem('User', empItem);
    let temp;
    if(empItem === ""){
        temp = <Link className="empLink" to="/">Continue</Link>
    }
    else{
        temp = <Link className="empLink" to="/Main">Continue</Link>
    }
    // const navigate = useNavigate();
    // const addEmpDet = useCallback(() => navigate('/Main', {replace:true}), [navigate]);
    //     // document.getElementById("empDetID").innerHTML = "Hi " + empItem + "!<br> Please Continue to add task.";
        // document.getElementById("empDetID").innerHTML += document.getElementById("search").value;
    return (
        <>
        <div className='headingIntro'><br /><h1>Employee Work System</h1></div>
        <div className="empDet" id="empDetID">
        <p><strong>Hello Admin!</strong> <br />Welcome to <strong>Employee Work System</strong>. 
            <br />Please Enter Employee Name to continue.</p><br />
            Employee Name: <input type="text" onChange={addEmp} id="empInput" />
            {/* <Button className='empBtn' variant="dark" text="white" size="sm" onClick={addEmpDet}>Continue</Button> */}
            {/* <Link className="empLink" to="/Main">Continue</Link> */}
            {/* <Main textEmp={empItem} /> */}
            {temp}
        </div>
        </>
    );
}

export default Intro;