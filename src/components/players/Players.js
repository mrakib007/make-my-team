import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Players = (props) => {
    const {name,image,salary} = props.player; //destracturing
    return (
        <React.Fragment>
            {/* added bootstrap */}
            <div className="col-md-3 "> 
            <div className="card">
            <img src={image} className="card-image-top" alt=""></img>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
             <p className="card-text">Price : {salary}</p>
             <a href="#" className="btn btn-success"
             onClick={() =>props.addPlayers(props.player)}><FontAwesomeIcon icon={faPlus} />Add Player</a>
            
           </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Players;