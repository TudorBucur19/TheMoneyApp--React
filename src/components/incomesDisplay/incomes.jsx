import React from 'react';
import './incomes.styles.css';

const Incomes = ({content, totalInc}) => {
    
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    
    
    return(
        <div>
            <table className="incomes--display">
                <thead>
                <tr className="inc--header">
                    <th>Source</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {content.map(el =>
                <tr> 
                    <td>{el.source}</td>
                    <td>{el.amount}</td>
                    <td>{el.date ? el.date : date}</td>
                </tr>
                )}
                </tbody>

                <tfoot className="inc--foot">
                <tr>
                    <td>Total</td>
                    <td>{totalInc}</td>
                    <td></td>
                </tr>
                </tfoot>
            </table>            
        </div>
    )
};

export default Incomes;