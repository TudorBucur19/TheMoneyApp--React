import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OperationsContext } from '../../contexts/OperationsContext';
import OperationsTable from './OperationTable/OperationsTable';
import { useDatabaseCalls } from '../../utils/customHooks/useDatabaseCalls';
import { getCurrentDate } from '../../utils/helperFunctions';
import { setOperationsLists } from '../../redux/ducks/operationsList';
import Modal from '../Common/Modal/Modal';
import OperationsForm from '../OperationsForm/OperationsForm';
import { toggleModal } from '../../redux/ducks/modalStatus';
import styles from './Operations.module.scss'

//export const total = (list) => list.reduce((total, el) => total = total + Number(el.amount), 0);

const Operations = () => {
    const { removeItem, updateItem } = useContext(OperationsContext);
    const currentMonth = getCurrentDate();
    const operations = useDatabaseCalls(currentMonth);
    const dispatch = useDispatch();
    const expenses = operations.filter(el => el.type === "expense");
    const incomes = operations.filter(el => el.type === "income");
    const { modalStatus } = useSelector(state => state);
    
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

            {modalStatus &&
                <Modal onClose={() => dispatch(toggleModal())}>
                    <OperationsForm/>
                </Modal>
            }
        </div>
    )
};

export default Operations;