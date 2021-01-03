import React from 'react';
import './expenses.styles.css';

const Expenses = ({content, totalExp}) => {
    
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    let totalExpenses = totalExp.reduce((total, el) => total = total + el, 0);
        

    return(
        <div>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>

                {content.map(el =>
                <tr> 
                    <td>{el.description} </td>
                    <td>{el.amount}</td>
                    <td>{el.category}</td>
                    <td>{date}</td>
                </tr>
                )}

                <tr>
                    <td>Total</td>
                    <td>{totalExpenses}</td>
                    <td></td>
                    <td></td>
                </tr>

            </table>            
                      
        </div>
    )
};

export default Expenses;