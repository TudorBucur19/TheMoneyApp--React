import React, { useContext } from 'react';
import { IncContext } from '../../contexts/IncomesContext';
import './incomes.styles.css';

const Incomes = () => {

    const { incomes, totalInc } = useContext(IncContext);
    
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
                {incomes.map(el =>
                <tr> 
                    <td>{el.income.source}</td>
                    <td>{el.income.amount}</td>
                    <td>{el.income.date ? el.income.date : date}</td>
                </tr>
                )}
                </tbody>

                <tfoot className="inc--foot">
                <tr>
                    <td>Total</td>
                    <td>{totalInc()}</td>
                    <td></td>
                </tr>
                </tfoot>
            </table>            
        </div>
    )
};

export default Incomes;