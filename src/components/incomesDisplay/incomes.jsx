import React from 'react';
import './incomes.styles.css';

const Incomes = ({content, totalInc}) => {
    
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    
    
    return(
        <div>
            <table className="incomes--display">
                <tr className="inc--header">
                    <th>Source</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>

                {content.map(el =>
                <tr> 
                    <td>{el.source} </td>
                    <td>{el.amount}</td>
                    <td>{date}</td>
                </tr>
                )}
                <tr>
                    <td>Total</td>
                    <td>{totalInc}</td>
                    <td></td>
                </tr>
            </table>            
        </div>
    )
};

export default Incomes;