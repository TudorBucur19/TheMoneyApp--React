import React from 'react';

const Expenses = ({content, totalExp}) => {
    
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    let totalExpenses = totalExp.reduce((total, el) => total = total + el, 0);
        

    return(
        <div>            
            {content.map(el =>
                <ul> 
                    <li>Desc: {el.description} </li>
                    <li>Val: {el.amount}</li>
                    <li>Category: {el.category}</li>
                    <li>Date: {date}</li>
                </ul>
            )}
            
            <div>
                <h2>
                    {totalExpenses}
                </h2>
            </div>
        </div>
    )
};

export default Expenses;