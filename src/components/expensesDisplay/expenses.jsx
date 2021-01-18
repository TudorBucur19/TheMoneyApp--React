import React, { useContext } from 'react';
import './expenses.styles.css';
import { ExpContext } from '../../contexts/ExpensesContext';


const Expenses = () => {
    const { totalExp, expenses } = useContext(ExpContext);
           
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    
    return(
        <div>
            <table className="expenses--display">
                <thead>
                <tr className="exp--header">
                    <th>Crt.</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {expenses.map((el, index) =>
                <tr key={el.id}>
                    <td>{index + 1}</td> 
                    <td>{el.expense.description} </td>
                    <td>{el.expense.amount}</td>
                    <td>{el.expense.category}</td>
                    <td>{el.expense.date ? el.expense.date : date}</td>
                </tr>
                )}
                </tbody>

                <tfoot className="exp--foot">    
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{totalExp()}</td>
                    <td></td>
                    <td></td>                    
                </tr>
                </tfoot>

            </table>            
                      
        </div>
    )
};

export default Expenses;