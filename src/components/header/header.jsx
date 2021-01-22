import React, { useContext } from 'react';
import './Header.styles.scss';
import { OperationsContext } from '../../contexts/OperationsContext';

const Header = () => {
    const { totalExp, totalInc, handleSearchInput, currentMonth } = useContext(OperationsContext);
    
    let percentage = ((totalExp()/totalInc())*100).toFixed(2);
    let balance = totalInc() - totalExp();

    return(
    <div className="budget-head">
        <div className="budget-title">
            <h3>Available budget in <span>{currentMonth}</span> </h3>
            <h2>{balance} Lei</h2>
        </div>

        <div className="incomes">
            <span className="incomes-text">Incomes </span> 
            <span className="inc-value">{totalInc()}  Lei</span>
        </div>

        <div className="expenses">
            <span className="expenses-text"> Expenses </span>
            <span className="percentage">{totalInc() === 0  ? 0 : percentage} %</span> 
            <span className="exp-value">{totalExp()}  Lei</span>  
            
        </div>

        <div className="search-month">
            <input type="text" placeholder="Check another month..." onChange={handleSearchInput} />
            <button type="submit">Check</button>  
        </div>
    </div>
    );
};

export default Header;