import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

function Dictionary(){
    const [keyword, setKeyword] = useState("");
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function handleResponse(response){
        console.log(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        alert(`Searching for defination ${keyword}`);

        //endpoint: https://api.dictionaryapi.dev/api/v2/entries/en/<word>

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword} `;
        axios.get(apiUrl).then(handleResponse);
    }
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type= "search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
        </div>
    );
}
export default Dictionary;