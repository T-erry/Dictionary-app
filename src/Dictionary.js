import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

function Dictionary(){
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    
    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
     }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
   
    function search(event){
        event.preventDefault();
        //endpoint: https://api.dictionaryapi.dev/api/v2/entries/en/<word>

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword} `;
        axios.get(apiUrl).then(handleResponse);
        
    }
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type= "search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <Results results={results}/>
        </div>
    );
}
export default Dictionary;