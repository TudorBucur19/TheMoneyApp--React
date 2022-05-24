import React, { useContext } from 'react';
import './Operations.scss';
import { OperationsContext } from '../../contexts/OperationsContext';

export const total = (list) => list.reduce((total, el) => total = total + Number(el.operation.amount), 0);

const Operations = () => {
    const { expenses, incomes, removeItem, updateItem } = useContext(OperationsContext);


    let today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    return (
        <div className="tables-container">
            
                <table className="expenses-display">
                    <thead>
                        <tr className="expense-header">
                            <th>Crt.</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Updates</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.map((el, index) =>
                            <tr key={el.id}>
                                <td >{index + 1}</td>
                                <td>{el.operation.description} </td>
                                <td>{el.operation.amount}</td>
                                <td>{el.operation.category}</td>
                                <td>{el.operation.date ? el.operation.date : date}</td>
                                <td>
                                    <button onClick={() => removeItem(el.id)}>Remove</button>
                                    <button onClick={() => updateItem(el.id, el.operation)}>Edit</button>
                                </td>
                            </tr>

                        )}
                    </tbody>

                    <tfoot className="expense-footer">
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>{total(expenses)}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            
                <table className="incomes-display">
                    <thead>
                        <tr className="income-header">
                            <th>Crt.</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Updates</th>
                        </tr>
                    </thead>

                    <tbody>
                        {incomes.map((el, index) =>

                            <tr key={el.id}>
                                <td>{index + 1}</td>
                                <td>{el.operation.description} </td>
                                <td>{el.operation.amount}</td>
                                <td>{el.operation.category}</td>
                                <td>{el.operation.date ? el.operation.date : date}</td>
                                <td>
                                    <button onClick={() => removeItem(el.id)}>Remove</button>
                                    <button onClick={() => updateItem(el.id, el.operation)}>Edit</button>
                                </td>
                            </tr>

                        )}
                    </tbody>

                    <tfoot className="income-footer">
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>{total(incomes)}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>

                </table>

            
        </div>
    )
};

export default Operations;