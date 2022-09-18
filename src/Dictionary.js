import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
  


function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);
    
    function handlePexelsResponse(response){
        setPhotos(response.data);
    }
    
    function handleDictionaryResponse(response){
    
        setResults(response.data[0]);
     }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
   
    function handleSubmit(event){
        event.preventDefault();
        search()
        
    }
    function search(){
//endpoint: https://api.dictionaryapi.dev/api/v2/entries/en/<word>

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword} `;
axios.get(apiUrl).then(handleDictionaryResponse);


let pexelsApiKey = "563492ad6f917000010000017695f8195c414674a7fd030ec8ebd4de";  
 
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};

axios.get(pexelsApiUrl, { headers: headers  }).then(handlePexelsResponse);



    }
    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){
        return(
            <div className="Dictionary">
                <section>
                <h1>What word are you looking?</h1>
                <form onSubmit={handleSubmit}>
                    <input type= "search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                </form>
                <div className="hint">
               hello, coffee, house
                </div>
                </section>
                <Results results={results}/>
                <Photos photos={photos}/>
            </div>
            
        );
    }else{
        load();
        return "loading";
    }
    
}
export default Dictionary;