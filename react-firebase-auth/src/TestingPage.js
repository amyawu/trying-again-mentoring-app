// not a hacker YT tutorial

import "./App.css";
import { db } from "./firebase";
import { v4 as uuidv4 } from 'uuid';
import { set, ref } from "firebase/database";
import { useState, useEffect } from "react";

function TestingPage() {
    const [todo, setTodo] = useState("");
    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };
    const writeToDatabase = () => {
        const uuId = uuidv4();
        set(ref(db, `/${uuId}`), {
            todo,
            uuId,
        });
        setTodo("");
    };
    // read
    // update
    // delete
    return(
        <div className="TestingPage">
            <input type="text" value={todo} onChange={handleTodoChange} />
            <button onClick={writeToDatabase}> submit </button>
        </div>
    );
}
/*const TestingPage = () => {
    return (
        <!-- <div className="TestingPage">
            <h2>Wow</h2>
        </div> -->
    );
}*/

export default TestingPage;