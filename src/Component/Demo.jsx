
import React,{useState} from "react";
import { Avatar, TextField } from "@mui/material";
import { Link } from "react-router-dom";
function Demo(){
    const [inputsearch,setinputsearch] = useState("");

    function Handlechange(event){
        setinputsearch(event.target.value)
    }
    return(
        <div className="header">
            <div className="header-left">
         <img  className="header-img"src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000.png" 
        alt=""/>
        <Link to ="/">
        <img className="header-img" src ="https://i.pinimg.com/736x/dd/57/38/dd573887b15bce97a9a6918977f2f77f.jpg"
        alt=""/>
        </Link>
        </div>
        <div className="header-input">
        <input onChange={Handlechange} value={inputsearch} placeholder="Search" type="text"/>
        <Link to ={`/search/${inputsearch}`}>
         <img className="size" src="https://img.icons8.com/?size=100&id=83218&format=png&color=000000.png"
        alt=""
        />
        </Link>
        </div>
        <div className="header-icons">
        <img  className="header-img"src="https://img.icons8.com/?size=100&id=85796&format=png&color=000000.png"
        alt =""
        />
         <img className="header-img" src="https://img.icons8.com/?size=100&id=83193&format=png&color=000000.png"
        alt=""
        />
        <img className="header-img" src="https://img.icons8.com/?size=100&id=83136&format=png&color=000000.png"
        alt=""
        />
        <Avatar className="header-img" alt="Harini" src="C:\Users\Harini\Downloads\IMG_5714 (10).JPG"/>
        </div>
        </div>
    );
}
export default Demo;