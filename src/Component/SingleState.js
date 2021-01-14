import React,{useState} from 'react';
import MultiState from "./MultiState";

const SingleState = () => {
    var [number,setnumber] = useState(0)
    var [flag, setbool] = useState(true)
    var [str, setstr] = useState("Hi")
    return (
        <div>
            <MultiState Number={number} setnumber={setnumber}/>
        </div>
    );
};

export default SingleState;