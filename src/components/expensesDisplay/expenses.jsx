import React from 'react';
import './expenses.styles.css';

const Expenses = ({content, totalExp}) => {
    
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    
    return(
        <div>
            <table className="expenses--display">
                <thead>
                <tr className="exp--header">
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {content.map(el =>
                <tr> 
                    <td>{el.description} </td>
                    <td>{el.amount}</td>
                    <td>{el.category}</td>
                    <td>{el.date ? el.date : date}</td>
                </tr>
                )}
                </tbody>

                <tfoot className="exp--foot">    
                <tr>
                    <td>Total</td>
                    <td>{totalExp}</td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>

            </table>            
                      
        </div>
    )
};

export default Expenses;