import React from 'react';

const ToDoList = (props) => {
    if(props.SId === 0)
    {return(
        <div className="todo-style">
            <li>
                {props.text}

                <button onClick={ () => {
                    props.onSelect(props.id, props.SId);
                }}>Next</button>
            </li>
        </div>
    );}
    if(props.SId === 1){
        return(
            <div className="todo-style">
                <li>
                    {props.text}
    
                    <button onClick={ () => {
                        props.onSelect(props.id, props.SId);
                    }}>Block</button>
                    <button onClick={ () => {
                        props.onNext(props.id, props.SId);
                    }}>Test</button>
                </li>
            </div>
        );  
    }
    if(props.SId === 2){
        return(
            <div className="todo-style">
                <li>
                    {props.text}
    
                    <button onClick={ () => {
                        props.onNext(props.id, props.SId);
                    }}>Back</button>
                </li>
            </div>
        );
    }
    if(props.SId === 3){
        return(
            <div className="todo-style">
                <li>
                    {props.text}

                    <button onClick={ () => {
                        props.onNext(props.id, props.SId);
                    }}>Back</button>
                    <button onClick={ () => {
                        props.onSelect(props.id, props.SId);
                    }}>Done</button>
                </li>
            </div>
        );
    }
    if(props.SId === 4){
        return(
            <div className="todo-style">
                <li>
                    {props.text}
                </li>
            </div>
        );
    }
}

export default ToDoList;

// how to optimise react, stop rerendring