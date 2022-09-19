import React, { useState } from "react";

const Form = (props) => {

const [todoText, setTodoText] = useState("");


const { todoList, setTodoList } = props;


const submitHandler = (e) => {
    e.preventDefault();
    
    setTodoList([
    
    ...todoList,
    
    {
        content: todoText,
        markedDelete: false, 
        
        id: Math.floor(Math.random() * 100000000).toString(),
    },
    ]);
    setTodoText("");
};

return (
    <div>
    <form onSubmit={submitHandler}>
        {/* This will be the input where todoText is added.  */}
        <input
        
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        />
        <button className="btn btn-outline-primary">Add</button>
    </form>
    </div>
);
};

export default Form;