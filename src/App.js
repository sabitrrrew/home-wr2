import React from 'react';
import {useState} from "react"
function App(props) {
    let [btn1 , changeBtn1]=useState("blue")
    let [btn2 , changeBtn2]=useState("red")
    function changeColor(char) {
        if(char==="a"){
            changeBtn1(btn1==="red"?"blue": "red")
            changeBtn2(btn2==="blue"?"red":"blue")
        }else if(char="b"){

        }
    }
    return (
        <div>
            <button style={{background : btn1}} onClick={()=>changeColor("a")}></button>
            <button style={{background : btn2}} onClick={()=>changeColor("b")}></button>
        </div>
    );
}

export default App;