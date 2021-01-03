import React from 'react';

const IncInputs = ({closeInc, handleIncChange, handleIncSubmit, income}) => {
    return(        
        <div>Add new income:
            <form action="" onSubmit={handleIncSubmit}>
                <input 
                type="text" 
                placeholder="Income source..." 
                name="source" 
                value={income.source} 
                onChange={handleIncChange}
                required/>

                <input 
                type="number" 
                placeholder="amount" 
                name="amount" 
                value={income.amount} 
                onChange={handleIncChange}
                required
                />

                <button type="submit">ADD</button>
                <button onClick={closeInc}>X</button>
            </form>
            </div>
    );
};

export default IncInputs;