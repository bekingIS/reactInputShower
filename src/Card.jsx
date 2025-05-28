import React from "react";

function Card(props){

    const delete = () => {
        const deleteBtn = document.getElementsByTagName('button');
        
    };
    return (
        <>
        <div className="taskcard">
            <p>{props.task}</p>
            <button onClick={delete}>Delete</button>
        </div>
        </>
    )
}