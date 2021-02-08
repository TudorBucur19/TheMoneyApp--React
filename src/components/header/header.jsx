import React, { useContext } from 'react';
import './Header.scss';
import { OperationsContext } from '../../contexts/OperationsContext';
import { total } from '../../components/operationsDisplay/Operations';

const Header = () => {
    const { expenses, incomes, currentMonth } = useContext(OperationsContext);

    const totalIncomes = total(incomes);
    const totalExpenses = total(expenses);

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