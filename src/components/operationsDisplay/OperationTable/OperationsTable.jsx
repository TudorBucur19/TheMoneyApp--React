import React from 'react';

import { totalAmountCalculator } from '../../../utils/helperFunctions';
import OperationElement from '../OperationElement/OperationElement';
import styles from './OperationsTbale.module.scss';

const OperationsTable = ({ operationsList, removeAction, updateAction, currentDate, typeClassName }) => {
const totalAmount = totalAmountCalculator(operationsList);
const { tableDisplay, tableHeader, tableFooter, } = styles;
    return ( 
        <table className={tableDisplay}>
                    <thead>
                        <tr className={`${tableHeader} ${typeClassName}`}>
                            <th>Crt.</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Updates</th>
                        </tr>
                    </thead>

                    <tbody>
                        {operationsList.map((el, index) =>
                            <OperationElement 
                            key={el.id}
                            element={el} 
                            elIndex={index} 
                            currentDate={currentDate} 
                            removeAction={removeAction}
                            updateAction={updateAction}
                            />
                        )}
                    </tbody>

                    <tfoot className={`${tableFooter} ${typeClassName}`}>
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>{totalAmount}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
     );
}
 
export default OperationsTable;