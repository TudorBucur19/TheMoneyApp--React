import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { OperationsContext } from '../../contexts/OperationsContext';
import { totalAmountCalculator } from '../../utils/helperFunctions';
import './Header.scss';

const Header = () => {
    const { currentMonth } = useContext(OperationsContext);
    const { incomes, expenses } = useSelector(state => state.operationsLists);

    const totalIncomes = totalAmountCalculator(incomes);
    const totalExpenses = totalAmountCalculator(expenses);

    let percentage = (totalExpenses/totalIncomes*100).toFixed(2);
    let balance = totalIncomes - totalExpenses;

    return(
    <div className="header">
        <div>
            <h3>Available budget in <span>{currentMonth}</span> </h3>
            <h2>{balance} Lei</h2>
        </div>

        <div className="incomes">
            <span>Incomes </span> 
            <span>{totalIncomes}  Lei</span>
        </div>

        <div className="expenses">
            <span>Expenses</span>
            <span className="percentage">{totalIncomes === 0  ? 0 : percentage} %</span> 
            <span>{totalExpenses}  Lei</span>  
            
        </div>
    </div>
    );
};

export default Header;