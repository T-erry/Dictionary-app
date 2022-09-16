import React from "react";
import ListenIcon from "./assets/ListenIcon.svg";
import "./Phonetic.css";

function Phonetic (props){
    console.log(props.phonetic);
    return(
        <div className="Phonetic">
          <a href={props.phonetic.audio}  rel="noopener noreferrer" target="_blank">
              <img src={ListenIcon} alt="listen" /> 
          </a>
         <span className="text">{props.phonetic.text}</span> 
        </div>
    );
}
export default Phonetic;