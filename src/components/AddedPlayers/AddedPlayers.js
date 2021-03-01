import React from 'react';

const AddedPlayers = (props) => {
    const players = props.playerAdded;
    console.log(players.length);

    let totalSalary = 0;
    let addedPlayers = [];
    
    for(let i=0;i<players.length;i++){
        const salary = players[i];
        const player = players[i];
        const totalPlayer = players[i].name;
        const specificSalary = players[i].salary;
        addedPlayers = addedPlayers.concat(",",totalPlayer,"(",specificSalary,")");
        totalSalary = totalSalary + salary.salary;
    }

    return (
        <div>
            <h3>Real Madrid</h3>
            <p>Purchased Players : {players.length}</p>
            <p>Total Expense : {totalSalary}</p>
             <p>Added Players : {addedPlayers}</p>
        </div>
    );
};

export default AddedPlayers;<h1></h1>