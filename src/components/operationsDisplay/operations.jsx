import React, { useContext } from 'react';
import './operations.styles.css';
import { OperationsContext } from '../../contexts/OperationsContext';


const Operations = () => {
    const { totalInc, totalExp, expenses, incomes, removeItem } = useContext(OperationsContext);


    let today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    return (
        <div>
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
                                <td>{el.operation.description} </td>
                                <td>{el.operation.amount}</td>
                                <td>{el.operation.category}</td>
                                <td>{el.operation.date ? el.operation.date : date}</td>
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


            <div>
                <table className="incomes--display">
                    <thead>
                        <tr className="inc--header">
                            <th>Crt.</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
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
                            </tr>

                        )}
                    </tbody>

                    <tfoot className="inc--foot">
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>{totalInc()}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>

                </table>

            </div>
        </div>
    )
};

export default Operations;