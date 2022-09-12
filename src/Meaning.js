import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props){
    console.log(props.meaning);
    return(
        <div className="Meaning">
             <h3>{props.meaning.partOfSpeech}</h3> 
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                      <p>
                        <strong>Definition:</strong>
                         {definition.definition}
                         <br />
                         <em>{definition.example}</em>  
                         </p>
                      </div>
                );
            })}
            < Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    );
}
export default Meaning;