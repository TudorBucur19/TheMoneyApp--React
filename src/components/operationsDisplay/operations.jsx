import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OperationsContext } from '../../contexts/OperationsContext';
import OperationsTable from './OperationTable/OperationsTable';
import { useDatabaseCalls } from '../../utils/customHooks/useDatabaseCalls';
import { getCurrentDate } from '../../utils/helperFunctions';
import { setOperationsLists } from '../../redux/ducks/operationsList';
import styles from './Operations.module.scss'


//export const total = (list) => list.reduce((total, el) => total = total + Number(el.amount), 0);

const Operations = () => {
    const { removeItem, updateItem } = useContext(OperationsContext);
    const currentMonth = getCurrentDate();
    const operations = useDatabaseCalls(currentMonth);
    const dispatch = useDispatch();
    const expenses = operations.filter(el => el.type === "expense");
    const incomes = operations.filter(el => el.type === "income");

    useEffect(() => {
        dispatch(setOperationsLists({incomes, expenses}))
    }, [operations]);
    
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const { tablesContainer, typeExpense, typeIncome } = styles;

    return (
        <div className={tablesContainer}>
            <OperationsTable
            operationsList={expenses} 
            removeAction={removeItem} 
            updateAction={updateItem} 
            currentDate={date}
            typeClassName={typeExpense}
            />
            
            <OperationsTable
            operationsList={incomes} 
            removeAction={removeItem} 
            updateAction={updateItem} 
            currentDate={date}
            typeClassName={typeIncome}
            />
        </div>
    )
};

export default Operations;