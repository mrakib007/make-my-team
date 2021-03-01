import React,{useState,useEffect} from 'react';
import fakedata from '../../fakedata/fakedata.json';
import './Shop.css';
import Players from '../players/Players';
import AddedPlayers from '../AddedPlayers/AddedPlayers';

const Shop = () => {
    // used useEffect
    useEffect(()=>{
        setPlayers(fakedata);
    },[])
    const [players,setPlayers] = useState([]);

    // const [players,setPlayers] = useState(fakedata);

    const [playerAdded,handleAdded] = useState([]);

    const addPlayers = (player) =>{
        const newPlayer = [...playerAdded,player]; 
        handleAdded(newPlayer);
    }
    
    return (
        <div className ="player-shop">
            <div className="player-container">
                {
                    players.map(player =>
                    <Players player={player}
                    addPlayers= {addPlayers}>
                    </Players>)
                }
            </div>
            <div className="player-added">
            <AddedPlayers playerAdded= {playerAdded}></AddedPlayers>
            </div>
        </div>
    );
};

export default Shop;