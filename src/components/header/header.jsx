import React, { useContext } from 'react';
import './header.styles.css';
import { OperationsContext } from '../../contexts/OperationsContext';

const Header = () => {
    const { totalExp } = useContext(OperationsContext);
    const { totalInc } = useContext(OperationsContext);

    let monthNumber = new Date().getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[monthNumber];

    let percentage = ((totalExp()/totalInc())*100).toFixed(2);
    let balance = totalInc() - totalExp();

    return(
    <div className="budget-head">
        <div className="budget-title">
            <h3>Available budget in <span>{currentMonth}</span> </h3>
            <h2>{balance} Lei</h2>
        </div>

        <div className="incomes">
            <div className="incomes-text">Incomes <span className="inc--value">{totalInc()}  Lei</span></div>
        </div>

        <div className="expenses">
            <div className="expenses-text">Expenses 
                <span className="percentage">{totalInc() === 0  ? 0 : percentage} %</span> 
                <span className="exp--value">{totalExp()}  Lei</span>  
            </div>
        </div>
    </div>
    );
};

export default Header;