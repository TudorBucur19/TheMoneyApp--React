import React from 'react';
import './incomes.styles.css';

const Incomes = ({content, totalInc}) => {
    
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let totalIncomes = totalInc.reduce((total, el) => total = total + el, 0);
    
    return(
        <div>
            <table className="incomesDiplay">
                <tr>
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
                    <td>{totalIncomes}</td>
                    <td></td>
                </tr>
            </table>            
        </div>
    )
};

export default Incomes;