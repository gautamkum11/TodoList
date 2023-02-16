import React, {useState} from "react";

function Inputarea(props) {

    const [inputtext, setinputtext] = useState("");

    function handlechange(event) {
        const newvalue = event.target.value;
        setinputtext(newvalue);
    }

    return (
        <div className = "form">
            <input onChange = {handlechange} type = "text" value = {inputtext} />
            <button onClick = {() => {
                props.onadd(inputtext);
                setinputtext("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default Inputarea;