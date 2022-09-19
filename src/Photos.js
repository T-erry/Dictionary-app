import React from "react";
function Photos(props){
    if (props.photos) {
      console.log(props.photos);
      return (
        <section className="Photos">
          <div className="row">
            
            {props.photos.map(function (photo, index) {
              console.log(photo.src);
              return (
                <div className="col-sm-4" key={index}>
          <img src={photo.src.landscape} className="img-fluid" alt="icon" />
          </div>
              );
            })}
          
          </div>
        </section>
      );
      } else {
        return null;
      }
    }
export default Photos;