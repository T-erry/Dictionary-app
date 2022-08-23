import React, {useState} from "react";
import "./Dictionary.css";

function Dictionary(){
    const [keyword, setKeyword] = useState("");
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} defination`);
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