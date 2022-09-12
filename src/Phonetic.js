import React from "react";

function Phonetic (props){
    console.log(props.phonetic);
    return(
        <div className="Phonetic">
          <a href={props.phonetic.audio}  rel="noopener noreferrer" target="_blank">;Listen</a>
          <br/>
          {props.phonetic.text}
        </div>
    );
}
export default Phonetic;