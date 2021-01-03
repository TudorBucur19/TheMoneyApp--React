import React from 'react';

const Incomes = ({content}) => {
    
    let today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    return(
        <div>            
            {content.map(el =>
                <ul> 
                    <li>Income source: {el.source} </li>
                    <li>Val: {el.amount}</li>
                    <li>Date: {date}</li>
                </ul>
            )}
        </div>
    )
};

export default Incomes;