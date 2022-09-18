import React from "react";


function Photos(props){
   if (props.photos){
    console.log(props.photos);
    return (
        <div className="Photos">
                
            </div>
    );
   }else {
    return null;
   }

}
export default Photos;