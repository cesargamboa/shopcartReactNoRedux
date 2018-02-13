import React from 'react';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min-lux.css';


const moreInfo = (props) => {
    return (
        <div className="container col-md-12">
         <div className="container col-md-8 offset-md-2 text-center">
        <img src={props.information} className="img-thumbnail btn-warning" alt="game" />
        
        </div>  

        </div>


    )


};

export default moreInfo;